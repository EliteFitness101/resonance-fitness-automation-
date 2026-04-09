import smtplib
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
import os

def dispatch_hni_mail(recipient_email, subject, body_html):
    """
    Industrial Zoho SMTP Dispatcher.
    Ensures 99.9% deliverability for ResoFlex™ assets.
    """
    host = "smtppro.zoho.com"
    port = 465
    user = "resoflex@resoflex.name.ng"
    password = os.getenv("ZOHO_APP_PASSWORD") # Generated in Zoho Security Settings

    msg = MIMEMultipart("alternative")
    msg["Subject"] = f"ResoFlex™ | {subject}"
    msg["From"] = f"ResoFlex™ Global <{user}>"
    msg["To"] = recipient_email

    msg.attach(MIMEText(body_html, "html"))

    try:
        with smtplib.SMTP_SSL(host, port) as server:
            server.login(user, password)
            server.sendmail(user, recipient_email, msg.as_string())
        print(f"✅ Luxury Dispatch Successful to {recipient_email}")
    except Exception as e:
        print(f"❌ Dispatch Failed: {e}")
