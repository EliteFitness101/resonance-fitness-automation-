import os
import requests
from fastapi import FastAPI, Query
from supabase import create_client
import google.generativeai as genai

app = FastAPI()

# Configuration (Managed via Vercel Environment Variables)
PAYSTACK_SECRET = os.environ.get("PAYSTACK_SECRET_KEY")
TELEGRAM_TOKEN = os.environ.get("TELEGRAM_BOT_TOKEN")
TELEGRAM_CHAT_ID = os.environ.get("TELEGRAM_CHAT_ID")

# Initialize Clients
genai.configure(api_key=os.environ.get("GEMINI_API_KEY"))
supabase = create_client(
    os.environ.get("SUPABASE_URL"), 
    os.environ.get("SUPABASE_SERVICE_ROLE_KEY")
)

def send_telegram_alert(message):
    if TELEGRAM_TOKEN and TELEGRAM_CHAT_ID:
        url = f"https://api.telegram.org/bot{TELEGRAM_TOKEN}/sendMessage"
        payload = {"chat_id": TELEGRAM_CHAT_ID, "text": message, "parse_mode": "HTML"}
        try:
            requests.post(url, json=payload)
        except Exception as e:
            print(f"Telegram Error: {e}")

@app.get("/api/verify-payment")
async def verify_payment(reference: str = Query(...)):
    url = f"https://api.paystack.co/transaction/verify/{reference}"
    headers = {"Authorization": f"Bearer {PAYSTACK_SECRET}"}
    
    try:
        response = requests.get(url, headers=headers)
        res_data = response.json()
        
        if res_data.get("status") and res_data["data"]["status"] == "success":
            amount = res_data["data"]["amount"] / 100
            email = res_data["data"]["customer"]["email"]
            
            # Instant CEO Alert
            msg = f"<b>🔥 ResoFlex™ 315 Activation!</b>\n\n" \
                  f"<b>Athlete:</b> {email}\n" \
                  f"<b>Amount:</b> ₦{amount:,.2f}\n" \
                  f"<b>Ref:</b> {reference}"
            send_telegram_alert(msg)
            
            return {"status": "success"}
    except Exception as e:
        print(f"Error: {e}")
        
    return {"status": "failed"}

@app.get("/api/health")
def health():
    return {"status": "operational", "brand": "ResoFlex™ Alpha"}
