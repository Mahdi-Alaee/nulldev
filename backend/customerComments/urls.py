from rest_framework.urls import path
from .views import CustomerCommentView

urlpatterns = [
    path('/', CustomerCommentView.as_view())
]