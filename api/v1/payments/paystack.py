import os
import requests

def create_payment_link(amount, email):
    url = "https://api.paystack.co/transaction/initialize"
    headers = {
        "Authorization": f"Bearer {os.getenv('PAYSTACK_SECRET_KEY')}",
        "Content-Type": "application/json"
    }
    data = {"amount": amount * 100, "email": email, "callback_url": "https://resofit.fit/success"}
    res = requests.post(url, json=data, headers=headers)
    return res.json()['data']['authorization_url']
