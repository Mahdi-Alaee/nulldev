from rest_framework.views import APIView
from .models import CustomerComment
from rest_framework.response import Response
from .serializers import CustomerCommentSerializer


class CustomerCommentView(APIView):
    def get(self,request):
        customerComments = CustomerComment.objects.all()
        serializer = CustomerCommentSerializer(customerComments, many=True)
        return Response(serializer.data)


