import { NextResponse } from "next/server";

export const runtime = "edge";

export async function POST(req: Request) {
  try {
    const form = await req.formData();
    const lead = {
      name: String(form.get("name") ?? ""),
      email: String(form.get("email") ?? ""),
      company: String(form.get("company") ?? ""),
      bottleneck: String(form.get("bottleneck") ?? ""),
      at: new Date().toISOString(),
    };

    // TODO: forward to ConverseOS webhook + CRM. Stubbed until backend creds are added.
    console.log("[lead]", lead);

    return NextResponse.redirect(new URL("/contact?ok=1", req.url), { status: 303 });
  } catch {
    return NextResponse.json({ ok: false }, { status: 400 });
  }
}
