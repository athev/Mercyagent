import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(req: Request, { params }: { params: { id: string } }) {
  try {
    const job = await prisma.jobTicket.findUnique({
      where: { id: params.id },
    });

    if (!job) {
      return NextResponse.json({ error: "Không tìm thấy Job" }, { status: 404 });
    }

    return NextResponse.json({ success: true, job });
  } catch (error: any) {
    console.error("Lỗi GET /api/jobs/[id]:", error);
    return NextResponse.json({ error: "Lỗi server" }, { status: 500 });
  }
}

export async function PATCH(req: Request, { params }: { params: { id: string } }) {
  try {
    const { status, trainerId } = await req.json();

    const job = await prisma.jobTicket.update({
      where: { id: params.id },
      data: {
        status: status || "IN_PROGRESS",
      },
    });

    return NextResponse.json({ success: true, job });
  } catch (error: any) {
    console.error("Lỗi PATCH /api/jobs/[id]:", error);
    return NextResponse.json({ error: "Lỗi khi cập nhật Job" }, { status: 500 });
  }
}
