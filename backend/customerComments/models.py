from django.db import models

# Create your models here.
class CustomerComment(models.Model):
    author = models.CharField(max_length=200)
    role = models.CharField(max_length=200)
    message = models.TextField(help_text='Enter customer comment: ', max_length=3000)

    def __str__(self):
        return  self.author

