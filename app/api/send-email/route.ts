// export async function POST(req: Request) {
//   const body = await req.json();
//   return Response.json({ ok: true });
// }

import axios from "axios";

export async function POST(req: Request) {
  const { from, subject, message } = await req.json();

  const API_KEY = process.env.MAILGUN_API_KEY;
  const DOMAIN = "pohwp.dev";

  try {
    await axios.post(
      `https://api.mailgun.net/v3/${DOMAIN}/messages`,
      new URLSearchParams({
        from: `feedback@${DOMAIN}`,
        to: process.env.ADMIN_EMAIL!,
        subject: `New Message: ${subject}`,
        text: `From: ${from}\n\nMessage:\n${message}`,
      }),
      {
        auth: {
          username: "api",
          password: API_KEY!,
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
    );

    return Response.json({ ok: true });
  } catch (err: any) {
    console.error(
      "MAILGUN FULL ERROR:",
      err.response?.data || err.message || err,
    );

    return Response.json(
      {
        ok: false,
        error: err.response?.data || err.message,
      },
      { status: 500 },
    );
  }
}
