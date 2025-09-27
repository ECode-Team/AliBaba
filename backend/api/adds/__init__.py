import os
import yaml

BASE_DIR = os.path.dirname(os.path.abspath(__file__))

"""======================= GEO ========================"""

with open(f"{BASE_DIR}/geo.yaml", "r", encoding="utf-8") as file:
    data = yaml.safe_load(file)

geos = data.get('geos')
airports = data.get('airports')

geos_cities = [item for value in geos.values() for item in value]
airports_cities = [item for value in airports.values() for item in value]

"""==================== Compamies ===================="""

with open(f"{BASE_DIR}/companies.yaml", "r", encoding="utf-8") as file:
    data = yaml.safe_load(file)

companies = data
