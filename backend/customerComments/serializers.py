from rest_framework import serializers
from .models import CustomerComment

class CustomerCommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomerComment
        fields = "__all__"

