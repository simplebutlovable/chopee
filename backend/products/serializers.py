from rest_framework import serializers
from products.models import ProductTags


class ProductTagsSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProductTags
        fields = "__all__"
        