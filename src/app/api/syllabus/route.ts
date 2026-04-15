import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import prisma from "@/lib/prisma";

// GET /api/syllabus — List all syllabuses of the current trainer
export async function GET() {
  const session = await getServerSession();
  if (!session?.user?.email) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const user = await prisma.user.findUnique({ where: { email: session.user.email } });
  if (!user) return NextResponse.json({ error: "User not found" }, { status: 404 });

  const syllabuses = await prisma.courseSyllabus.findMany({
    where: { authorId: user.id },
    include: { organization: { select: { name: true, slug: true, logoText: true, primaryColor: true } } },
    orderBy: { updatedAt: "desc" },
  });

  return NextResponse.json({ syllabuses });
}

// POST /api/syllabus — Create a new syllabus (DRAFT)
export async function POST(req: Request) {
  const session = await getServerSession();
  if (!session?.user?.email) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const user = await prisma.user.findUnique({
    where: { email: session.user.email },
    include: {
      trainerMemberships: {
        where: { isApproved: true },
        include: { organization: true },
      },
    },
  });

  if (!user) return NextResponse.json({ error: "User not found" }, { status: 404 });

  const membership = user.trainerMemberships.find((m) => m.organization.isVerified);
  if (!membership) {
    return NextResponse.json(
      { error: "Bạn chưa thuộc tổ chức đối tác đã được xác minh bởi Vibework." },
      { status: 403 }
    );
  }

  const body = await req.json();
  const { title, courseCode } = body;

  if (!title || title.trim().length < 3) {
    return NextResponse.json({ error: "Tên khóa học phải có ít nhất 3 ký tự." }, { status: 400 });
  }

  const syllabus = await prisma.courseSyllabus.create({
    data: {
      title: title.trim(),
      courseCode: courseCode || null,
      authorId: user.id,
      organizationId: membership.organizationId,
      status: "DRAFT",
    },
  });

  return NextResponse.json({ syllabus }, { status: 201 });
}
