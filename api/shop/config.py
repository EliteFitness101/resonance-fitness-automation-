import os
from supabase import create_client

# Industrial Configuration
SHOPIFY_STORE = os.getenv("SHOPIFY_STORE_DOMAIN")
SHOPIFY_TOKEN = os.getenv("SHOPIFY_STOREFRONT_TOKEN")
SUPABASE_URL = os.getenv("SUPABASE_URL")
SUPABASE_KEY = os.getenv("SUPABASE_SERVICE_ROLE_KEY")

supabase = create_client(SUPABASE_URL, SUPABASE_KEY)

def init_industrial_session(athlete_id):
    # Synchronize Supabase Athlete profile with Shopify Order history
    return supabase.table("athlete_vault").select("*").eq("id", athlete_id).execute()
