from rest_framework import serializers

from external_users.models import ExternalUserMessages


class ExternalUserMessagesSerializer(serializers.ModelSerializer):

    email = serializers.EmailField(max_length=255, min_length=4),
    fullname = serializers.CharField(max_length=255, min_length=2)
    message = serializers.CharField(max_length=5000, min_length=2)

    class Meta:
        model = ExternalUserMessages
        fields = ['email', 'fullname', 'message',
                  ]

    def create(self, validated_data):
        return ExternalUserMessages.objects.create(**validated_data)
