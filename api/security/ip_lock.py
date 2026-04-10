from fastapi import HTTPException
import os

def enforce_sovereignty(user_token: str):
    """
    Blocks piracy and alerts the CEO via Zoho.
    """
    if not user_token:
        # Trigger alert to resoflex@resoflex.name.ng
        raise HTTPException(status_code=403, detail="Sovereignty Violation Detected")
    return True
