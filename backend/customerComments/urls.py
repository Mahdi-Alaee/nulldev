from rest_framework.urls import path
from .views import CustomerCommentView

urlpatterns = [
    path('customercomments', CustomerCommentView.as_view())
]