import OpenAI from "openai";

const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export async function generateContent() {
  const res = await client.chat.completions.create({
    model: "gpt-4.1-mini",
    messages: [
      {
        role: "user",
        content: `
Generate 4 viral Instagram posts for Nigerian fitness audience.
Include:
- Emotional hook
- Caption
- CTA to Telegram bot
- Hashtags
        `
      }
    ]
  });

  return res.choices[0].message.content;
}