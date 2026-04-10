import os
import requests

def post_to_tiktok_metricool(content_url, caption):
    """
    Triggers the daily 4x4 motivation post via Metricool/TikTok API.
    """
    webhook_url = os.getenv("METRICOOL_WEBHOOK")
    payload = {
        "url": content_url,
        "text": caption,
        "publish_at": "auto",
        "tone": "CEO_Authority_Compassionate"
    }
    response = requests.post(webhook_url, json=payload)
    return response.status_code
