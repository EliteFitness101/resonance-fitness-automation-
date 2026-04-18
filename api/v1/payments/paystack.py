import os
import json
import hmac
import hashlib
from supabase import create_client

def handler(request):
    secret = os.environ.get("PAYSTACK_SECRET_KEY")
    signature = request.headers.get('x-paystack-signature')
    
    # Secure validation
    computed_sig = hmac.new(secret.encode(), request.data, hashlib.sha512).hexdigest()
    if computed_sig != signature:
        return {"status": "unauthorized"}, 401

    payload = json.loads(request.data)
    if payload['event'] == 'charge.success':
        email = payload['data']['customer']['email']
        amount = payload['data']['amount']
        
        # Connect to Supabase to unlock features
        sb = create_client(os.environ["NEXT_PUBLIC_SUPABASE_URL"], os.environ["SUPABASE_SERVICE_ROLE_KEY"])
        sb.table('profiles').update({
            "membership_tier": "Elite" if amount >= 500000 else "Standard",
            "active_plan": "NaijaFit"
        }).eq("email", email).execute()
        
        return {"status": "success"}, 200
    return {"status": "ignored"}, 200
