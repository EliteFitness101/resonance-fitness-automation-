export default async function handler(req, res) {
  // Direct Paystack Server-to-Server communication
  const event = req.body;
  if (event?.event === 'charge.success') {
    console.log('Automated Sync for Reference:', event.data.reference);
  }
  res.status(200).send('Webhook Received');
}
