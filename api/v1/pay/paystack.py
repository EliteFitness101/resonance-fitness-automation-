import os
import requests
from flask import jsonify

def handler(request):
    payload = request.get_json()
    if not payload or payload.get('event') != "transaction.success":
        return jsonify({"status": "ignored"}), 200

    data = payload['data']
    amount = data['amount'] / 100
    email = data['customer']['email']
    ref = data['reference']

    # Logic for Coach B2K Notifications
    tier = "ELITE" if amount >= 5000 else "RESET"
    message = f"🚀 *{tier} SALE CONFIRMED*\n\nUser: {email}\nAmount: ₦{amount}\nRef: {ref}"
    
    # Internal call to your Telegram bot logic
    send_telegram_alert(message)

    return jsonify({"status": "success", "tier": tier}), 200

def send_telegram_alert(text):
    token = os.environ.get("TELEGRAM_BOT_TOKEN")
    chat_id = os.environ.get("TELEGRAM_ADMIN_CHAT_ID")
    url = f"https://api.telegram.org/bot{token}/sendMessage"
    requests.post(url, json={"chat_id": chat_id, "text": text, "parse_mode": "Markdown"})
