"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { Loader2, AlertCircle } from "lucide-react";
import SyllabusWizard, { SyllabusData } from "@/components/vibe-learning/trainer/SyllabusWizard";
import OrganizationGate from "@/components/vibe-learning/trainer/OrganizationGate";

type RawSection = string | null | undefined;
const parseSection = (raw: RawSection) => {
  if (!raw) return null;
  try { return JSON.parse(raw); } catch { return null; }
};

export default function SyllabusDetailPage() {
  return (
    <OrganizationGate>
      {(membership) => <SyllabusEditor orgId={membership.organization.id} org={membership.organization} />}
    </OrganizationGate>
  );
}

function SyllabusEditor({ orgId, org }: { orgId: string; org: any }) {
  const { id } = useParams<{ id: string }>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [syllabusData, setSyllabusData] = useState<SyllabusData | null>(null);
  const [title, setTitle] = useState("");

  useEffect(() => {
    if (!id) return;
    fetch(`/api/syllabus/${id}`)
      .then(r => r.json())
      .then(({ syllabus, error: err }) => {
        if (err) { setError(err); setLoading(false); return; }
        setTitle(syllabus.title);
        setSyllabusData({
          section1: parseSection(syllabus.section1),
          section2: parseSection(syllabus.section2),
          section3: parseSection(syllabus.section3),
          section4: parseSection(syllabus.section4),
          section5: parseSection(syllabus.section5),
          section6: parseSection(syllabus.section6),
          section7: parseSection(syllabus.section7),
        });
        setLoading(false);
      })
      .catch(() => { setError("Không thể tải đề cương này."); setLoading(false); });
  }, [id]);

  if (loading) return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center">
      <div className="flex flex-col items-center gap-3">
        <Loader2 className="w-7 h-7 text-violet-500 animate-spin" />
        <p className="text-slate-500 text-sm">Đang tải đề cương...</p>
      </div>
    </div>
  );

  if (error) return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center">
      <div className="text-center">
        <AlertCircle className="w-10 h-10 text-red-400 mx-auto mb-3" />
        <p className="text-slate-700 font-medium">{error}</p>
        <a href="/vibe-learning/trainer/syllabus" className="mt-4 inline-block text-violet-600 text-sm hover:underline">
          ← Quay lại danh sách
        </a>
      </div>
    </div>
  );

  return (
    <SyllabusWizard
      syllabusId={id!}
      initialData={syllabusData!}
      initialTitle={title}
      org={org}
    />
  );
}
