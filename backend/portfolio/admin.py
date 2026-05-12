from django.contrib import admin
from .models import Tag, Portfolio

# Register your models here.

@admin.register(Tag)
class TagAdmin(admin.ModelAdmin):
    search_fields = ['name']

@admin.register(Portfolio)
class Portfolio(admin.ModelAdmin):
    list_display = ['title', 'is_active', 'is_deleted', 'created_at']
    list_filter = ['is_deleted', 'is_active', 'tags']
    search_fields = ['title', 'description']
    filter_horizontal = ['tags']