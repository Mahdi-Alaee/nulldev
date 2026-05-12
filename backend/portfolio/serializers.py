from rest_framework import serializers
from .models import Portfolio, Tag

class TagSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tag
        fields = ['id', 'name']

class PortfolioSerializer(serializers.ModelSerializer):
    tags = TagSerializer(many=True, read_only=True)

    class Meta:
        model = Portfolio
        fields = [
            'id',
            'title',
            'is_deleted',
            'is_active',
            'created_at',
            'description',
            'image',
            'url',
            'tags',
        ]

