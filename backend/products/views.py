from django.shortcuts import render
from django.http import HttpResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response
from products.serializers import ProductTagsSerializer
from products.models import ProductTags


@api_view(['GET'])
def productTagsCapture(request):
    product_tags = ProductTags.objects.all()
    serializers = ProductTagsSerializer(product_tags, many=True)
    return Response(serializers.data)