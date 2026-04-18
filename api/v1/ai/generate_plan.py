import os
import google.generativeai as genai
from flask import jsonify, request

genai.configure(api_key=os.environ.get("GEMINI_API_KEY"))

def handler(req):
    data = request.get_json()
    # Pull biometrics from your ResoFlex landing page form
    stats = data.get('stats', 'Standard Fitness')
    
    model = genai.GenerativeModel('gemini-pro')
    prompt = f"Roleplay as Coach B2K. Create a 7-day Nigerian meal and workout plan for: {stats}."
    
    response = model.generate_content(prompt)
    return jsonify({"plan": response.text}), 200
