export interface CertificateRecord {
  certificateId: string;
  participantName: string;
  program: string;
  issueDate: string;
  status: "Verified" | "Revoked";
}

// Mock/demo dataset. In production this should be replaced with a call to:
// GET /api/certificates/{certificateId}
const MOCK_CERTIFICATES: Record<string, CertificateRecord> = {
  "VB-QA-2026-000001": {
    certificateId: "VB-QA-2026-000001",
    participantName: "Aarav Shrestha",
    program: "QA & Software Testing Practical Internship",
    issueDate: "2026-02-14",
    status: "Verified",
  },
  "VB-QA-2026-000002": {
    certificateId: "VB-QA-2026-000002",
    participantName: "Sujata Gurung",
    program: "QA & Software Testing Practical Internship",
    issueDate: "2026-03-21",
    status: "Verified",
  },
};

export async function verifyCertificate(
  certificateId: string
): Promise<{ found: boolean; record?: CertificateRecord }> {
  // Simulated latency to mirror a real network call.
  await new Promise((resolve) => setTimeout(resolve, 500));

  const normalized = certificateId.trim().toUpperCase();
  const record = MOCK_CERTIFICATES[normalized];

  if (!record) {
    return { found: false };
  }
  return { found: true, record };
}
