import os
from vercel_blob import put

def migrate_to_vercel():
    # Path to your 22 videos
    video_dir = "./videos/" 
    
    for i in range(1, 23):
        filename = f"{i}.mp4"
        with open(os.path.join(video_dir, filename), 'rb') as f:
            # This pushes the video to the global Vercel CDN
            blob = put(filename, f.read(), {'access': 'public'})
            print(f"✅ {filename} is live at: {blob['url']}")

if __name__ == "__main__":
    migrate_to_vercel()
