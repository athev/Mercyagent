import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import prisma from "@/lib/prisma";

type Params = { params: Promise<{ id: string }> };

// GET /api/syllabus/[id]
export async function GET(_req: Request, { params }: Params) {
  const { id } = await params;
  const session = await getServerSession();
  if (!session?.user?.email) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const user = await prisma.user.findUnique({ where: { email: session.user.email } });
  if (!user) return NextResponse.json({ error: "User not found" }, { status: 404 });

  const syllabus = await prisma.courseSyllabus.findFirst({
    where: { id, authorId: user.id },
    include: {
      organization: true,
      author: { select: { name: true, email: true, image: true } },
    },
  });

  if (!syllabus) return NextResponse.json({ error: "Not found" }, { status: 404 });
  return NextResponse.json({ syllabus });
}

// PUT /api/syllabus/[id] — Save section data
export async function PUT(req: Request, { params }: Params) {
  const { id } = await params;
  const session = await getServerSession();
  if (!session?.user?.email) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const user = await prisma.user.findUnique({ where: { email: session.user.email } });
  if (!user) return NextResponse.json({ error: "User not found" }, { status: 404 });

  const existing = await prisma.courseSyllabus.findFirst({
    where: { id, authorId: user.id },
  });
  if (!existing) return NextResponse.json({ error: "Not found" }, { status: 404 });

  const body = await req.json();
  const {
    title, courseCode,
    section1, section2, section3, section4, section5, section6, section7,
    status,
  } = body;

  // Validate if trying to certify
  if (status === "CERTIFIED") {
    const sections = [section1, section2, section3, section4, section5, section6, section7];
    const missing = sections.some((s) => !s || s === "null");
    if (missing) {
      return NextResponse.json(
        { error: "Phải hoàn thành tất cả 7 sections trước khi xuất đề cương." },
        { status: 400 }
      );
    }
  }

  const updated = await prisma.courseSyllabus.update({
    where: { id },
    data: {
      ...(title && { title }),
      ...(courseCode !== undefined && { courseCode }),
      ...(section1 !== undefined && { section1 }),
      ...(section2 !== undefined && { section2 }),
      ...(section3 !== undefined && { section3 }),
      ...(section4 !== undefined && { section4 }),
      ...(section5 !== undefined && { section5 }),
      ...(section6 !== undefined && { section6 }),
      ...(section7 !== undefined && { section7 }),
      ...(status && { status }),
    },
    include: { organization: true },
  });

  return NextResponse.json({ syllabus: updated });
}

// DELETE /api/syllabus/[id]
export async function DELETE(_req: Request, { params }: Params) {
  const { id } = await params;
  const session = await getServerSession();
  if (!session?.user?.email) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const user = await prisma.user.findUnique({ where: { email: session.user.email } });
  if (!user) return NextResponse.json({ error: "User not found" }, { status: 404 });

  await prisma.courseSyllabus.deleteMany({ where: { id, authorId: user.id } });
  return NextResponse.json({ ok: true });
}
