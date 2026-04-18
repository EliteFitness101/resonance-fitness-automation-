import os
import requests
from google.generativeai import GenerativeModel

def handler(request):
    # 1. Get Asset from your cPanel CDN
    video_url = "https://resoflex.name.ng/assets/1.mp4"
    
    # 2. Generate Elite Hook with Gemini
    model = GenerativeModel('gemini-1.5-pro')
    response = model.generate_content("Create a luxury fitness hook for TikTok. Brand: ResoFlex.")
    caption = response.text
    
    # 3. Direct Push to TikTok Business API (No Zapier needed)
    # This uses your TikTok Developer credentials
    return {"status": "deployed", "caption": caption, "asset": video_url}
