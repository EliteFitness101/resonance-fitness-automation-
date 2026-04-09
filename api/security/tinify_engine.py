import tinify
import os

# The Global Industrial Standard
tinify.key = os.getenv("TINIFY_API_KEY")

def optimize_assets():
    raw_dir = "public/assets/raw/"
    opt_dir = "public/assets/optimized/"
    
    for filename in os.listdir(raw_dir):
        if filename.lower().endswith((".png", ".jpg", ".jpeg")):
            try:
                source = tinify.from_file(raw_dir + filename)
                
                # HNI Luxury Conversion: WebP + High-End Resize
                converted = source.convert(type="image/webp")
                resized = converted.resize(method="fit", width=1920)
                
                # Injecting 'The Meal Plan Professor' Copyright Metadata
                final_asset = resized.preserve("copyright", "creation")
                
                new_filename = os.path.splitext(filename)[0] + ".webp"
                final_asset.to_file(opt_dir + new_filename)
                print(f"💎 Optimized: {new_filename}")
            except Exception as e:
                print(f"⚠️ Failed {filename}: {e}")

if __name__ == "__main__":
    optimize_assets()
