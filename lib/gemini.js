export async function generateImage(prompt) {
  const res = await fetch(
    "https://generativelanguage.googleapis.com/v1/images:generate",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${process.env.GEMINI_API_KEY}`
      },
      body: JSON.stringify({
        prompt
      })
    }
  );

  const data = await res.json();
  return data.image;
}