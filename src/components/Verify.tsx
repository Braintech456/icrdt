import { useState } from "react";
import Award from "lucide-react/dist/esm/icons/award";
import Building2 from "lucide-react/dist/esm/icons/building-2";

const SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbwV_kTQ5BC5inwf8Zx-5es1bdlIibHkxFE6E5PALCYPuC-mJVvA_ZC5hNyPSYMb2gY0/exec";

export default function Verify() {
  // ================= CERTIFICATE STATES =================
  const [certId, setCertId] = useState("");
  const [candidateEmail, setCandidateEmail] = useState("");
  const [certResult, setCertResult] = useState<any>(null);
  const [certError, setCertError] = useState("");
  const [certLoading, setCertLoading] = useState(false);

  // ================= CENTER STATES =================
  const [centerEmail, setCenterEmail] = useState("");
  const [centerResult, setCenterResult] = useState<any>(null);
  const [centerError, setCenterError] = useState("");
  const [centerLoading, setCenterLoading] = useState(false);

  // ================= CERTIFICATE VERIFICATION =================
  const verifyCertificate = async (e: React.FormEvent) => {
    e.preventDefault();
    setCertResult(null);
    setCertError("");
    setCertLoading(true);

    const url =
      `${SCRIPT_URL}?type=certificate` +
      `&certId=${encodeURIComponent(certId.trim())}` +
      `&email=${encodeURIComponent(candidateEmail.trim().toLowerCase())}`;

    try {
      const res = await fetch(url);
      const data = await res.json();

      if (!data.verified) {
        setCertError(data.message || "Certificate not found.");
      } else {
        setCertResult(data.data);
      }
    } catch {
      setCertError("Verification service temporarily unavailable.");
    } finally {
      setCertLoading(false);
    }
  };

  // ================= CENTER VERIFICATION =================
  const verifyCenter = async (e: React.FormEvent) => {
    e.preventDefault();
    setCenterResult(null);
    setCenterError("");
    setCenterLoading(true);

    const url =
      `${SCRIPT_URL}?type=center` +
      `&email=${encodeURIComponent(centerEmail.trim().toLowerCase())}`;

    try {
      const res = await fetch(url);
      const data = await res.json();

      if (!data.verified) {
        setCenterError(data.message || "Center not authorized.");
      } else {
        setCenterResult(data.data);
      }
    } catch {
      setCenterError("Verification service temporarily unavailable.");
    } finally {
      setCenterLoading(false);
    }
  };

  return (
    <section className="min-h-screen bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-[#0A1F44] mb-4">
            ICRDT Verification System
          </h1>
          <div className="w-24 h-1 bg-[#1B4FA3] mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Verify the authenticity of ICRDT certifications and authorized
            training centers through the official registry.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">

          {/* ================= CERTIFICATE ================= */}
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-8">
            <div className="w-12 h-12 bg-[#1B4FA3] rounded-md flex items-center justify-center mb-6">
              <Award className="text-white" size={26} />
            </div>

            <h2 className="text-2xl font-bold text-[#0A1F44] mb-3">
              Verify Certification
            </h2>

            <form className="space-y-4" onSubmit={verifyCertificate}>
              <input
                type="text"
                placeholder="Certificate ID"
                value={certId}
                onChange={(e) => setCertId(e.target.value)}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:border-[#1B4FA3] focus:outline-none"
              />

              <input
                type="email"
                placeholder="Registered Candidate Email"
                value={candidateEmail}
                onChange={(e) => setCandidateEmail(e.target.value)}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:border-[#1B4FA3] focus:outline-none"
              />

              <button
                disabled={certLoading}
                className="w-full bg-[#1B4FA3] hover:bg-[#163E82] text-white py-2 rounded-md font-semibold transition-colors disabled:opacity-70"
              >
                {certLoading ? "Checking..." : "Verify Certificate"}
              </button>
            </form>

            {certLoading && (
              <div className="mt-4 flex items-center gap-2 text-[#1B4FA3] font-medium">
                <div className="w-4 h-4 border-2 border-[#1B4FA3] border-t-transparent rounded-full animate-spin"></div>
                Please wait while we verify the certificate...
              </div>
            )}

            {certError && (
              <p className="mt-4 text-red-600 font-medium">{certError}</p>
            )}

            {certResult && (
              <div className="mt-6 bg-green-50 border border-green-200 rounded-md p-4 text-sm">
                <p><b>Name:</b> {certResult.name}</p>
                <p><b>Program:</b> {certResult.course}</p>
                <p><b>Result:</b> {certResult.result}</p>
                <p><b>Date of Issuance:</b> {certResult.date}</p>
                <p><b>Authorized Center:</b> {certResult.institute}</p>
              </div>
            )}
          </div>

          {/* ================= CENTER ================= */}
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-8">
            <div className="w-12 h-12 bg-[#1B4FA3] rounded-md flex items-center justify-center mb-6">
              <Building2 className="text-white" size={26} />
            </div>

            <h2 className="text-2xl font-bold text-[#0A1F44] mb-3">
              Verify Authorized Center
            </h2>

            <form className="space-y-4" onSubmit={verifyCenter}>
              <input
                type="email"
                placeholder="Official Center Email"
                value={centerEmail}
                onChange={(e) => setCenterEmail(e.target.value)}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:border-[#1B4FA3] focus:outline-none"
              />

              <button
                disabled={centerLoading}
                className="w-full bg-[#1B4FA3] hover:bg-[#163E82] text-white py-2 rounded-md font-semibold transition-colors disabled:opacity-70"
              >
                {centerLoading ? "Checking..." : "Verify Center"}
              </button>
            </form>

            {centerLoading && (
              <div className="mt-4 flex items-center gap-2 text-[#1B4FA3] font-medium">
                <div className="w-4 h-4 border-2 border-[#1B4FA3] border-t-transparent rounded-full animate-spin"></div>
                Please wait while we verify the center...
              </div>
            )}

            {centerError && (
              <p className="mt-4 text-red-600 font-medium">{centerError}</p>
            )}

            {centerResult && (
              <div className="mt-6 bg-green-50 border border-green-200 rounded-md p-4 text-sm">
                <p><b>Status:</b> Authorized</p>
                <p><b>Center Code:</b> {centerResult.atc}</p>
                <p><b>Institute:</b> {centerResult.name}</p>
                <p><b>Valid Till:</b> {centerResult.valid}</p>
                <p><b>District:</b> {centerResult.district}</p>
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}