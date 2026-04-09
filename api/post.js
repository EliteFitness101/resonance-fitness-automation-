import { generateContent } from "../lib/chatgpt.js";

export default async function handler(req, res) {
  const content = await generateContent();

  await fetch(`https://graph.facebook.com/v18.0/${process.env.INSTAGRAM_ACCOUNT_ID}/media`, {
    method: "POST",
    body: JSON.stringify({
      image_url: "https://your-image-url",
      caption: content,
      access_token: process.env.INSTAGRAM_ACCESS_TOKEN
    })
  });

  res.json({ status: "posted" });
}