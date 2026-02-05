from django.contrib import admin
from django.contrib.auth.admin import UserAdmin as DjangoUserAdmin
from .models import User, Role, UserRole, Notification


@admin.register(User)
class UserAdmin(DjangoUserAdmin):
    model = User
    ordering = ("email",)

    list_display = ("email", "full_name", "phone", "is_active", "is_staff", "created_at")
    search_fields = ("email", "full_name", "phone")
    list_filter = ("is_active", "is_staff", "is_superuser")

    fieldsets = (
        (None, {"fields": ("email", "password")}),
        ("Profile", {"fields": ("full_name", "phone")}),
        ("Permissions", {"fields": ("is_active", "is_staff", "is_superuser", "groups", "user_permissions")}),
        ("Dates", {"fields": ("last_login", "created_at", "updated_at")}),
    )

    add_fieldsets = (
        (None, {
            "classes": ("wide",),
            "fields": ("email", "full_name", "phone", "password1", "password2", "is_staff", "is_superuser"),
        }),
    )

    readonly_fields = ("created_at", "updated_at", "last_login")


@admin.register(Role)
class RoleAdmin(admin.ModelAdmin):
    list_display = ("code", "name", "created_at")
    search_fields = ("code", "name")
    ordering = ("code",)


@admin.register(UserRole)
class UserRoleAdmin(admin.ModelAdmin):
    list_display = ("user", "role", "created_at")
    search_fields = ("user__email", "role__code")
    list_filter = ("role__code",)
    ordering = ("-created_at",)


@admin.register(Notification)
class NotificationAdmin(admin.ModelAdmin):
    list_display = ("user", "channel", "template_code", "sent_at", "created_at")
    search_fields = ("user__email", "template_code")
    list_filter = ("channel", "template_code")
    ordering = ("-created_at",)
