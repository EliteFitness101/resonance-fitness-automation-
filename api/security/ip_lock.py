from fastapi import HTTPException

def verify_hni_integrity(current_ip: str, user_profile: dict):
    """
    Strict IP Lock for HNI Global Appeal.
    Prevents mass distribution by limiting access to 2 unique global IPs.
    """
    authorized = user_profile.get("authorized_ips", [])
    if current_ip not in authorized:
        if len(authorized) >= 2:
            # Logic to trigger Telegram Security Alert
            raise HTTPException(status_code=403, detail="SECURITY BREACH: Account Frozen due to multiple location access.")
    return True
