import tinify
import os

tinify.key = os.getenv("TINIFY_API_KEY")

def process_assets():
    raw_dir = "public/assets/raw/"
    opt_dir = "public/assets/optimized/"
    for file in os.listdir(raw_dir):
        if file.endswith((".jpg", ".png", ".jpeg")):
            source = tinify.from_file(raw_dir + file)
            # Convert to WebP + Resize for HNI Luxury
            converted = source.convert(type="image/webp")
            resized = converted.resize(method="fit", width=1920)
            final_name = os.path.splitext(file)[0] + ".webp"
            resized.to_file(opt_dir + final_name)
            print(f"Patriotic Polish Applied: {final_name}")

if __name__ == "__main__":
    process_assets()
