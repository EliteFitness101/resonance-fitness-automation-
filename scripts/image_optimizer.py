import tinify
import os

tinify.key = os.getenv("TINIFY_API_KEY")

def optimize_ui(image_path):
    source = tinify.from_file(image_path)
    source.to_file(f"public/images/optimized_{os.path.basename(image_path)}")
    print("UI Optimization Complete.")
