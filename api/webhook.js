export default async function handler(req, res) {
  const event = req.body;

  if (event.event === "charge.success") {
    const email = event.data.customer.email;

    // Trigger Telegram bot message
    await fetch("https://api.telegram.org/bot" + process.env.TELEGRAM_BOT_TOKEN + "/sendMessage", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({
        chat_id: email,
        text: "✅ Payment received! Generate your plan now: https://resoflex.name.ng/naijameal"
      })
    });
  }

  res.status(200).end();
}