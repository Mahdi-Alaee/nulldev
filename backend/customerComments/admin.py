from django.contrib import admin
from .models import CustomerComment

@admin.register(CustomerComment)
class CustomerCommentAdmin(admin.ModelAdmin):
    list_display = ['author', 'message']