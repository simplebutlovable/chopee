from django.db import models
from django.core.files.storage import default_storage
from django.db.models.signals import post_delete, pre_save
from django.dispatch import receiver
from pathlib import Path
import os
import os.path



def upload_location(instance, filename):
    file_path = 'product-tags/{tag_id}/-{filename}'.format(
        tag_id=str(instance.tag_name),
        filename=filename
    )
    return file_path

class ProductTags(models.Model):
    tag_name = models.CharField(max_length=50)
    tag_icon = models.ImageField(upload_to=upload_location, blank=False, null= False)
    date_published = models.DateTimeField(auto_now_add=True, verbose_name="date_published")
    date_updated = models.DateTimeField(auto_now=True, verbose_name="date_updated")
   


    class Meta:
        verbose_name_plural = "Product Tags"
    
    def __str__(self):
        return self.tag_name


@receiver(post_delete, sender=ProductTags)
def delete_associated_files(sender, instance, **kwargs):
    """Remove main directory after deleting the Image"""
    path = instance.tag_icon.name
    parent_path = os.path.relpath(os.path.join(path, os.pardir))

    if path:
        default_storage.delete(path)
        default_storage.delete(parent_path)
    
@receiver(pre_save, sender=ProductTags)
def delete_file_on_update(sender, instance, **kwargs):
    if instance.pk:
        try:
            old_icon = ProductTags.objects.get(pk=instance.pk).tag_icon
        except ProductTags.DoesNotExist:
            return
        else:
            new_icon = instance.tag_icon
            if old_icon and old_icon.url != new_icon.url:
                old_icon.delete(save=False)