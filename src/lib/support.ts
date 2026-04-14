export type SupportSource = "support_form" | "support_chat";

type SupportTicketPayload = {
  source: SupportSource;
  subject: string;
  message: string;
  customerName: string;
  contact: string;
  region: string;
  city: string;
};

type ContactParts = {
  customerEmail?: string;
  customerPhone?: string;
};

const DEFAULT_SUPPORT_API_URL = process.env.NEXT_PUBLIC_SUPPORT_API_URL || "/api/support/tickets";
const PUBLIC_SUPPORT_TOKEN = process.env.NEXT_PUBLIC_SUPPORT_TOKEN || "";

function splitContact(contact: string): ContactParts {
  const value = contact.trim();
  if (!value) {
    return {};
  }

  if (value.includes("@")) {
    return { customerEmail: value };
  }

  return { customerPhone: value };
}

function buildHeaders() {
  const headers: Record<string, string> = {
    "Content-Type": "application/json",
  };

  if (PUBLIC_SUPPORT_TOKEN) {
    headers["X-Support-Token"] = PUBLIC_SUPPORT_TOKEN;
  }

  return headers;
}

export async function submitSupportTicket(payload: SupportTicketPayload) {
  const endpoint = DEFAULT_SUPPORT_API_URL.trim();
  if (!endpoint) {
    throw new Error("Не задан NEXT_PUBLIC_SUPPORT_API_URL.");
  }

  const contactParts = splitContact(payload.contact);
  const response = await fetch(endpoint, {
    method: "POST",
    headers: buildHeaders(),
    body: JSON.stringify({
      subject: payload.subject,
      message: payload.message,
      customer_name: payload.customerName,
      customer_email: contactParts.customerEmail,
      customer_phone: contactParts.customerPhone,
      page_url: typeof window !== "undefined" ? window.location.href : "",
      source: payload.source,
      metadata: {
        region: payload.region,
        city: payload.city,
        contact_raw: payload.contact,
        submitted_from: "adis-website",
      },
    }),
  });

  if (response.ok) {
    return;
  }

  let errorMessage = "Не удалось отправить обращение.";
  try {
    const data = (await response.json()) as { detail?: string };
    if (typeof data.detail === "string" && data.detail.trim()) {
      errorMessage = data.detail.trim();
    }
  } catch {
    // Ignore non-JSON responses and keep the generic message.
  }

  throw new Error(errorMessage);
}

