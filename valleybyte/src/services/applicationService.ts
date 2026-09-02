export interface ApplicationPayload {
  fullName: string;
  email: string;
  phone: string;
  institution: string;
  degree: string;
  graduationYear: string;
  skillLevel: string;
  motivation: string;
  cvFile?: File | null;
}

export interface ApplicationResult {
  success: boolean;
  referenceId?: string;
  error?: string;
}

// In production, replace this with a real request to something like:
// POST /api/applications  (multipart/form-data, including cvFile)
export async function submitApplication(
  payload: ApplicationPayload
): Promise<ApplicationResult> {
  await new Promise((resolve) => setTimeout(resolve, 700));

  if (!payload.fullName || !payload.email) {
    return { success: false, error: "Missing required fields." };
  }

  const referenceId = `VB-APP-${Date.now().toString().slice(-8)}`;
  return { success: true, referenceId };
}
