export interface ContactPayload {
  name: string;
  email: string;
  phone?: string;
  message: string;
}

export interface ContactResult {
  success: boolean;
  error?: string;
}

// In production, replace this with a real request to something like:
// POST /api/contact
export async function submitContactMessage(
  payload: ContactPayload
): Promise<ContactResult> {
  await new Promise((resolve) => setTimeout(resolve, 600));

  if (!payload.name || !payload.email || !payload.message) {
    return { success: false, error: "Missing required fields." };
  }
  return { success: true };
}
