import os
import yaml


"""======================= GEO ========================"""

with open(f"{os.path.abspath(__file__)}/../geo.yaml", "r", encoding="utf-8") as file:
    data = yaml.safe_load(file)

geos = data.get('geos')
airports = data.get('airports')

geos_cities = [item for value in geos.values() for item in value]
airports_cities = [item for value in airports.values() for item in value]

"""==================== Compamies ===================="""

with open(f"{os.path.abspath(__file__)}/../companies.yaml", "r", encoding="utf-8") as file:
    data = yaml.safe_load(file)

companies = data
