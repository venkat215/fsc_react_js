from django.db import models


class ExternalUserMessages(models.Model):

    email = models.CharField(max_length=255, blank=False)
    fullname = models.CharField(max_length=255, blank=False)
    message = models.CharField(max_length=5000, blank=False)
    replied = models.BooleanField(default=False, blank=False)

    class Meta:
        db_table = "external_users"

    def __str__(self):
        return self.email
