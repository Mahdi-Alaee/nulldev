from django.db import models


class Tag(models.Model):
    name = models.CharField(max_length=50, unique=True)

    class Meta:
        ordering = ['name']

    def __str__(self):
        return self.name

class Portfolio(models.Model):
    created_at = models.DateTimeField(auto_now_add=True)
    title = models.CharField(max_length=200)
    description = models.TextField(max_length=3000)
    image = models.ImageField(upload_to='portfolios/',blank=True,null=True)
    url = models.URLField(blank=True, null=True)
    is_active = models.BooleanField(default=True)
    is_deleted = models.BooleanField(default=False)
    tags = models.ManyToManyField(Tag, related_name='portfolios')

    class Meta:
        ordering = ['-created_at']

    def __str__(self):
        return self.title

