from django.contrib.auth import get_user_model
from rest_framework import serializers

User = get_user_model()


class RegisterSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True, min_length=8)

    class Meta:
        model = User
        fields = ("id", "email", "password", "full_name", "phone")

    def create(self, validated_data):
        password = validated_data.pop("password")
        return User.objects.create_user(password=password, **validated_data)


class MeSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ("id", "email", "full_name", "phone", "is_active", "created_at")
        read_only_fields = fields


class UpdateMeSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ("full_name", "phone")
