import os
import requests

class ResoFlexShop:
    def __init__(self):
        self.shop_url = f"https://{os.getenv('SHOPIFY_STORE_DOMAIN')}/api/2024-01/graphql.json"
        self.headers = {
            "X-Shopify-Storefront-Access-Token": os.getenv("SHOPIFY_STOREFRONT_TOKEN"),
            "Content-Type": "application/json"
        }

    def fetch_products(self):
        query = "{ products(first: 5) { edges { node { id title handle } } } }"
        response = requests.post(self.shop_url, json={'query': query}, headers=self.headers)
        return response.json()
