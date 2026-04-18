import os
import google.generativeai as genai
from dotenv import load_dotenv

load_dotenv()

def generate_luxury_hook(context):
    genai.configure(api_key=os.getenv("GEMINI_API_KEY"))
    model = genai.GenerativeModel('gemini-1.5-pro')
    prompt = f"Role: Elite Fitness Architect. Context: {context}. Task: Write a 15-word hook for a 100M NGN brand. CTA: resofit.fit 🧬"
    response = model.generate_content(prompt)
    return response.text.strip()
