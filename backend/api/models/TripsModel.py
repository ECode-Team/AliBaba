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
        db_index=True,
    )
    From = models.CharField(
        choices=[
            ("Tehran", "Tehran"),
            ("Shiraz", "Shiraz"),
            ("Mashhad", "Mashhad"),
            ("Gheshm", "Gheshm"),
        ],
        max_length=30,
        db_index=True,
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
        db_index=True,
    )
    passenger = models.CharField(
        choices=[("First Class", "First Class"), ("Economy", "Economy")],
        max_length=30,
        db_index=True,
    )
    Price = models.DecimalField(
        max_digits=10, decimal_places=2, blank=False, null=False, db_index=True
    )
    Date = models.DateTimeField()
