import os
import json
import google.generativeai as genai
import argparse

def generate_hook(asset_name):
    reg_path = 'api/v1/marketing/assets_registry.json'
    with open(reg_path, 'r') as f:
        registry = json.load(f)
    
    data = registry.get(asset_name, {"context": "Training"})
    
    genai.configure(api_key=os.getenv("GEMINI_API_KEY"))
    model = genai.GenerativeModel('gemini-1.5-pro')
    
    prompt = f"Write a 15-word luxury fitness hook for: {data['context']}. Include link: paystack.shop/resonancefitness-store 🧬"
    
    response = model.generate_content(prompt)
    return response.text.strip()

if __name__ == "__main__":
    parser = argparse.ArgumentParser()
    parser.add_argument("--asset", required=True)
    args = parser.parse_args()
    print(generate_hook(args.asset))
