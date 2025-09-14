export default async function handler(req, res) {
  const ip =
    req.headers["x-forwarded-for"]?.split(",")[0] || req.socket.remoteAddress;

  const ua = req.headers["user-agent"];
  const time = new Date().toISOString();

  // Лог в консоль (будет видно в Vercel Logs)
  console.log(`[LOG] ${time} — IP: ${ip} — UA: ${ua}`);

  res.status(200).json({ success: true });
}
