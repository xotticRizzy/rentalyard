import uuid
from django.db import models
from django.utils import timezone
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin, BaseUserManager


class UserManager(BaseUserManager):
    def create_user(self, email: str, password: str | None = None, **extra_fields):
        if not email:
            raise ValueError("Email is required")

        email = self.normalize_email(email).lower()
        user = self.model(email=email, **extra_fields)

        if password:
            user.set_password(password)
        else:
            user.set_unusable_password()

        user.save(using=self._db)
        return user

    def create_superuser(self, email: str, password: str, **extra_fields):
        extra_fields.setdefault("is_staff", True)
        extra_fields.setdefault("is_superuser", True)
        extra_fields.setdefault("is_active", True)

        if extra_fields.get("is_staff") is not True:
            raise ValueError("Superuser must have is_staff=True")
        if extra_fields.get("is_superuser") is not True:
            raise ValueError("Superuser must have is_superuser=True")

        return self.create_user(email=email, password=password, **extra_fields)


class User(AbstractBaseUser, PermissionsMixin):
    """
    ERD USER:
      id (uuid PK)
      email (unique)
      phone
      full_name
      is_active
      created_at
    """
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)

    email = models.EmailField(unique=True)
    phone = models.CharField(max_length=32, blank=True)
    full_name = models.CharField(max_length=255, blank=True)

    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)

    created_at = models.DateTimeField(default=timezone.now, editable=False)
    updated_at = models.DateTimeField(auto_now=True)

    objects = UserManager()

    USERNAME_FIELD = "email"
    REQUIRED_FIELDS: list[str] = []

    class Meta:
        db_table = "user"
        indexes = [models.Index(fields=["email"])]

    def __str__(self) -> str:
        return self.email


class Role(models.Model):
    """
    ERD ROLE
    """
    id = models.AutoField(primary_key=True)
    code = models.CharField(max_length=64, unique=True)
    name = models.CharField(max_length=128)
    created_at = models.DateTimeField(default=timezone.now, editable=False)

    class Meta:
        db_table = "role"
        indexes = [models.Index(fields=["code"])]

    def __str__(self) -> str:
        return self.code


class UserRole(models.Model):
    """
    ERD USER_ROLE (M:N User <-> Role)
    """
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)

    user = models.ForeignKey("accounts.User", on_delete=models.CASCADE, related_name="user_roles")
    role = models.ForeignKey("accounts.Role", on_delete=models.PROTECT, related_name="user_roles")

    created_at = models.DateTimeField(default=timezone.now, editable=False)

    class Meta:
        db_table = "user_role"
        constraints = [
            models.UniqueConstraint(fields=["user", "role"], name="uniq_user_role")
        ]

    def __str__(self) -> str:
        return f"{self.user.email} -> {self.role.code}"


class Notification(models.Model):
    """
    ERD NOTIFICATION
    """
    class Channel(models.TextChoices):
        EMAIL = "EMAIL", "Email"
        SMS = "SMS", "SMS"
        INAPP = "INAPP", "In-app"

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)

    user = models.ForeignKey("accounts.User", on_delete=models.CASCADE, related_name="notifications")
    channel = models.CharField(max_length=16, choices=Channel.choices)
    template_code = models.CharField(max_length=64)
    payload_json = models.JSONField(default=dict, blank=True)

    sent_at = models.DateTimeField(null=True, blank=True)
    created_at = models.DateTimeField(default=timezone.now, editable=False)

    class Meta:
        db_table = "notification"
        indexes = [
            models.Index(fields=["user"]),
            models.Index(fields=["channel"]),
            models.Index(fields=["template_code"]),
        ]

    def __str__(self) -> str:
        return f"{self.channel}:{self.template_code} -> {self.user.email}"
