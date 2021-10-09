from django.urls import path
from .views import productTagsCapture

app_name = "products"


urlpatterns = [
    path('api', productTagsCapture, name="product_tags"),
]