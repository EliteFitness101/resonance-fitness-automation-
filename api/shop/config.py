<div style="text-align: right;"> <button onclick="navigator.clipboard.writeText(document.getElementById('shop-config-py').innerText)">📋 Copy config.py</button> </div>
<pre id="shop-config-py">
import os
SHOPIFY_CONFIG = {
"API_KEY": os.environ.get("SHOPIFY_API_KEY"),
"PASSWORD": os.environ.get("SHOPIFY_APP_PASSWORD"),
"STORE_NAME": "resoflex-fitness",
"API_VERSION": "2024-04"
}
</pre>
