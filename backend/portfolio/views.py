from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Portfolio
from .serializers import PortfolioSerializer


class PortfolioView(APIView):
    def get(self,request):
        portfolios = Portfolio.objects.all()
        serializer = PortfolioSerializer(portfolios, many=True)
        return Response(serializer.data)