import os
import requests
from fastapi import FastAPI, HTTPException

app = FastAPI()

# Sovereign Access Keys
METRICOOL_KEY = os.getenv("METRICOOL_API_KEY")
RES_SECRET = os.getenv("INDUSTRIAL_SECRET")

@app.post("/api/v1/marketing/dispatch")
async def trigger_automated_post(data: dict):
    """
    Industrial command to flood the market with ResoFlex™ visuals.
    """
    if data.get("secret") != RES_SECRET:
        raise HTTPException(status_code=403, detail="Unauthorized System Access")
        
    # Logic: Pairing Canva URL with ResoFlex Elite Audio
    payload = {
        "text": data.get("caption", "ResoFlex™ Sovereignty. #MaviaSculpt"),
        "media": data.get("media_url"),
        "publish_at": data.get("schedule_time")
    }
    
    response = requests.post(
        "https://api.metricool.com/v1/posts",
        json=payload,
        headers={"Authorization": f"Bearer {METRICOOL_KEY}"}
    )
    return {"status": "Dispatch Sent", "metricool_id": response.json().get("id")}
