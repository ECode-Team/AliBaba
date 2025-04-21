from django.db import models


class Trip(models.Model):
    TransferType = models.CharField(
        choices=[
            ("Train", "Train"),
            ("Bus", "Bus"),
            ("Domestic Flight", "Domestic Flight"),
            ("International Flight", "International Flight"),
        ],
        max_length=30,
    )
    From = models.CharField(
        choices=[
            ("Tehran", "Tehran"),
            ("Shiraz", "Shiraz"),
            ("Mashhad", "Mashhad"),
            ("Gheshm", "Gheshm"),
        ],
        max_length=30,
    )
    To = models.CharField(
        choices=[
            ("Tehran", "Tehran"),
            ("Shiraz", "Shiraz"),
            ("Mashhad", "Mashhad"),
            ("Gheshm", "Gheshm"),
            ("London", "London"),
        ],
        max_length=30,
    )
    passenger = models.CharField(
        choices=[("First Class", "First Class"), ("Economy", "Economy")], max_length=30
    )
    Price = models.DecimalField(
        max_digits=10, decimal_places=2, blank=False, null=False
    )
    Date = models.DateTimeField()
