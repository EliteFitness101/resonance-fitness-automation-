import os
from vercel_blob import put

def upload_dominion_assets():
    # Set your BLOB_READ_WRITE_TOKEN in .env first
    token = os.getenv("BLOB_READ_WRITE_TOKEN")
    
    # Uploads 1-22 to the high-speed Vercel CDN
    for i in range(1, 23):
        file_path = f"./videos/{i}.mp4" 
        with open(file_path, 'rb') as f:
            resp = put(f"resoflex-{i}.mp4", f.read(), {'access': 'public'})
            print(f"✅ Video {i} live: {resp['url']}")

if __name__ == "__main__":
    upload_dominion_assets()
