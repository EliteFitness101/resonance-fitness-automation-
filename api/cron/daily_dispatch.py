import os
from vercel_blob import list
import google.generativeai as genai

def handler(request):
    # Pulls all video URLs from your new Vercel Blob store
    blob_list = list()
    # Picks a video based on the day of the month
    current_video = blob_list['blobs'][0]['url'] 

    genai.configure(api_key=os.getenv("GEMINI_API_KEY"))
    model = genai.GenerativeModel('gemini-1.5-pro')
    hook = model.generate_content("Luxury fitness hook for resofit.fit. Target 100M NGN.").text

    return {
        "status": "Dispatching",
        "hook": hook,
        "video_cdn_url": current_video
    }
