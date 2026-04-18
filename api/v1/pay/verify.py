import os
import requests
from flask import jsonify, request

def handler(req):
    ref = request.args.get('reference')
    if not ref:
        return jsonify({"error": "Missing reference"}), 400

    secret = os.environ.get("PAYSTACK_SECRET_KEY")
    url = f"https://api.paystack.co/transaction/verify/{ref}"
    headers = {"Authorization": f"Bearer {secret}"}

    res = requests.get(url, headers=headers).json()
    if res.get('status') and res['data']['status'] == 'success':
        return jsonify({"status": "verified", "data": res['data']}), 200
    
    return jsonify({"status": "failed"}), 400
