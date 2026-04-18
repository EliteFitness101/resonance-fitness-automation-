# Path: ./scripts/dominion_logger.py
import datetime
import json
import os

LOG_FILE = 'api/v1/marketing/dominion_ledger.txt'

def log_broadcast(asset_id, hook, link):
    timestamp = datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    
    # Formatting the entry for high-readability
    entry = (
        f"--- BROADCAST_LOG: {timestamp} ---\n"
        f"ASSET: {asset_id}.mp4\n"
        f"HOOK: {hook}\n"
        f"TARGET: {link}\n"
        f"STATUS: DISPATCHED\n"
        f"{'-' * 35}\n\n"
    )

    # Ensure directory exists
    os.makedirs(os.path.dirname(LOG_FILE), exist_ok=True)

    # Append to the ledger
    with open(LOG_FILE, 'a') as f:
        f.write(entry)
    
    print(f"📑 LEDGER_UPDATED: Mission {asset_id} recorded.")

if __name__ == "__main__":
    # Test entry
    log_broadcast("OS_DASHBOARD", "Metabolic sync confirmed.", "paystack.shop/resonancefitness-store")

