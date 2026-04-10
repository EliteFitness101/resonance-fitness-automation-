from fastapi import FastAPI
import os

app = FastAPI(title="ResoFlex™ Industrial Command")

@app.get("/")
def read_root():
    return {
        "identity": "ResoFlex™ Global Empire",
        "status": "Sovereign",
        "admin": os.getenv("MASTER_ADMIN_EMAIL", "resoflex@resoflex.name.ng"),
        "infrastructure": "Vercel + Zoho Authorized"
    }

@app.get("/health")
def health_check():
    return {"status": "100/100 Performance", "security": "IP-Lock Active"}
