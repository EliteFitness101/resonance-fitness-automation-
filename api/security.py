import hashlib
from fastapi import HTTPException

def apply_digital_watermark(user_email: str, payment_id: str):
    """Generates a unique, traceable ID for all HNI assets."""
    unique_hash = hashlib.sha256(f"{user_email}{payment_id}RESOFLEX".encode()).hexdigest()
    return unique_hash[:12]

def check_ip_integrity(current_ip: str, authorized_ips: list):
    """Strict IP-Lock: Limit to 2 locations for Global HNI profiles."""
    if current_ip not in authorized_ips:
        if len(authorized_ips) >= 2:
            raise HTTPException(status_code=403, detail="SECURITY ALERT: Unauthorized access location. Account Frozen.")
    return True
