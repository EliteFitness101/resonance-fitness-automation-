# api/v1/bots/telegram.py
import os
from flask import Flask, request, jsonify

def handler(req):
    if req.method == "POST":
        update = req.get_json()
        # Logic to handle incoming messages from users
        return jsonify({"status": "ok"}), 200
    
    # This allows you to test the URL in a browser
    return jsonify({"message": "ResoFlex Bot API is active"}), 200
