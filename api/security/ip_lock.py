from fastapi import Request, HTTPException
import os

def verify_access(request: Request):
    client_ip = request.client.host
    # Authorized logic for resoflex@resoflex.name.ng
    authorized_ips = os.getenv("AUTHORIZED_IPS", "").split(",")
    
    if client_ip not in authorized_ips:
        # Trigger Zoho Alert logic here
        return {"alert": "Unauthorized Access Logged"}
    return {"status": "Access Granted"}
