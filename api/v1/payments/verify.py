# api/v1/payments/verify.py
import os
import requests
import json

def handler(request):
    # Retrieve the reference from the query string
    ref = request.args.get('ref')
    secret_key = os.environ.get('PAYSTACK_SECRET_KEY')

    if not ref:
        return {"status": "error", "message": "Reference required"}, 400

    url = f"https://api.paystack.co/transaction/verify/{ref}"
    headers = {
        "Authorization": f"Bearer {secret_key}",
        "Content-Type": "application/json"
    }

    try:
        response = requests.get(url, headers=headers)
        data = response.json()

        if data.get('status') and data['data']['status'] == "success":
            amount = data['data']['amount'] # Amount in Kobo
            
            # ResoFlex™ Tier Logic (Naira * 100)
            if amount >= 250000000: tier = "tier4"    # ₦2.5M
            elif amount >= 100000000: tier = "tier5"  # ₦1.0M
            elif amount >= 75000000: tier = "tier3"   # ₦750k
            elif amount >= 35000000: tier = "tier2"   # ₦350k
            else: tier = "tier1"

            return {
                "status": "success",
                "tier": tier,
                "email": data['data']['customer']['email']
            }, 200
        else:
            return {"status": "failed", "message": "Transaction invalid"}, 401
    except Exception as e:
        return {"status": "error", "message": str(e)}, 500
