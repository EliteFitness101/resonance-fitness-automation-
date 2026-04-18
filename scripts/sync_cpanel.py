import os
import json

# This script maps your .name.ng files to your Vercel registry
def sync():
    registry = {}
    for i in range(1, 23):
        filename = f"{i}.mp4"
        registry[filename] = {
            "cdn_url": f"https://resoflex.name.ng/cdn/{filename}",
            "market_value": "Elite"
        }
    with open('api/v1/marketing/registry.json', 'w') as f:
        json.dump(registry, f, indent=2)
    print("CDN Registry Synchronized.")

if __name__ == "__main__":
    sync()
