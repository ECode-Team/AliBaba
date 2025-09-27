from django.db import models
from rest_framework import serializers, exceptions
from .. import adds

TRANSFER_TYPES = [
    ("Train", "Train"),
    ("Bus", "Bus"),
    ("Flight", "Flight"),
    ("Domestic Flight", "Domestic")
]

PASSENGERS_TYPES = [
    ("Economy", "Economy"),
    ("Business", "Business"),
    ("First class", "First")
]

class Trip(models.Model):
    transfer_type = models.CharField(choices=TRANSFER_TYPES, max_length=30)
    passengers_type = models.CharField(choices=PASSENGERS_TYPES, max_length=30)
    passengers_max = models.PositiveIntegerField(blank=True, null=True)

    depart = models.CharField(choices=[(item, item) for item in adds.geos_cities], max_length=30)
    depart_country = models.CharField(choices=[(item, item) for item in adds.geos.keys()], max_length=30)

    arrive = models.CharField(choices=[(item, item) for item in adds.geos_cities], max_length=30)
    arrive_country = models.CharField(choices=[(item, item) for item in adds.geos.keys()], max_length=30)

    company = models.CharField(choices=[(code, name) for code, name in adds.companies.items()], max_length=50)
    company_logo = models.CharField(max_length=255)

    depart_time = models.TimeField()
    arrive_time = models.TimeField()

    price = models.DecimalField(max_digits=10, decimal_places=2)


class TripSerializer(serializers.ModelSerializer):
    class Meta:
        model = Trip
        fields = '__all__'

    def get_company(self, obj):
        return obj.get_company_display()

    @classmethod
    def validate_city(cls, data):
        """
        Validate city in country
        """

        if data.get('depart') not in adds.geos.get(data.get('depart_country')) or \
                data.get('arrive') not in adds.geos.get(data.get('arrive_country')):
            raise exceptions.ParseError('City and Country error')

    @classmethod
    def validate_airport(cls, data):
        """
        Validate Domestic Flight can only be Iran
        Validate City should have airport
        """

        if data.get('transfer_type') == "Domestic Flight" and \
                (data.get('depart_country') != "Iran" or data.get('arrive_country') != "Iran"):
            raise exceptions.ParseError('Domestic Flight has different country destination')

        if data.get('transfer_type') == "Flight" and \
                (data.get('depart') not in adds.airports_cities or data.get('arrive') not in adds.airports_cities):
            raise exceptions.ParseError('Airport not found for Flight transfer')

    @classmethod
    def validate_britain(cls, data):
        """
        Validate Britain can have only Flight transfer
        """

        if ((data.get("arrive_country") == 'Britain') ^ (data.get("depart_country") == "Britain")) and \
                data.get('transfer_type') != "Flight":
            raise exceptions.ParseError('Britain transfer can only be via airport')

    @classmethod
    def validate_domestic_flight(cls, data):
        """
        If Flight within Iran, make transfer domestic
        """

        if data.get('arrive_country') == data.get("depart_country") == "Iran" and data.get('transfer_type') == "Flight":
            data['transfer_type'] = "Domestic Flight"

    def create(self, validated_data):
        self.validate_britain(validated_data)
        self.validate_domestic_flight(validated_data)
        self.validate_city(validated_data)
        self.validate_airport(validated_data)

        return super().create(validated_data)

    def to_representation(self, instance):
        data = super().to_representation(instance)
        data['company'] = instance.get_company_display()
        return data