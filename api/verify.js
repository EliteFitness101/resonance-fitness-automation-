<div style="text-align: right;"> <button onclick="navigator.clipboard.writeText(document.getElementById('verify-js').innerText)">📋 Copy verify.js</button> </div>
<pre id="verify-js">
export default function handler(req, res) {
const { ref } = req.query;
if (!ref) {
return res.status(400).json({ error: 'No reference provided' });
}
// Redirect to the main Python logic
res.redirect(307, /api/v1/payments/verify?ref=${ref});
}
</pre>
