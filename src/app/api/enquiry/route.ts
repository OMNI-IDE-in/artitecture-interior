import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Honeypot check
    if (body.website) {
      return NextResponse.json({ ok: true, message: "Thank you for your enquiry." });
    }

    const name = String(body.name || "").trim();
    const phone = String(body.phone || "").trim();

    if (!name || !phone) {
      return NextResponse.json(
        { error: "Please provide both your name and phone number." },
        { status: 400 }
      );
    }

    return NextResponse.json({
      ok: true,
      message: `Thank you, ${name}! Your consultation request has been received. Our team will reach out on ${phone} shortly.`,
    });
  } catch {
    return NextResponse.json({ error: "Invalid request payload." }, { status: 400 });
  }
}
