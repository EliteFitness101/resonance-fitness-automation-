import os
from fastapi import FastAPI, Request
from .shopify_handler import ResoFlexShop
from .logistics_bridge import LogisticsBridge

app = FastAPI()

@app.post("/api/v1/payments/webhook")
async def handle_payment(request: Request):
    payload = await request.json()
    if payload['event'] == 'charge.success':
        # 1. Finalize Shopify Order
        shop = ResoFlexShop()
        shop.create_order(payload['data'])
        
        # 2. Trigger Logistics
        logistics = LogisticsBridge()
        logistics.calculate_shipping(payload['data']['customer']['country'], 10) # 10kg default
        
    return {"status": "Handshake Complete"}
