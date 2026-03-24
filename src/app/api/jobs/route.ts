import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const { title, description, analysisData, budget, postedById } = data;

    if (!title || !description) {
      return NextResponse.json({ error: "Thiếu thông tin Job" }, { status: 400 });
    }

    const job = await prisma.jobTicket.create({
      data: {
        title,
        description,
        analysisData: analysisData || {},
        budget: budget || "Thoả thuận",
        postedById: postedById || null,
        status: "OPEN"
      }
    });

    return NextResponse.json({ success: true, job });

  } catch (error: any) {
    console.error("Lỗi POST /api/jobs:", error);
    return NextResponse.json({ error: "Thất bại khi đăng việc lên Marketplace" }, { status: 500 });
  }
}

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const status = searchParams.get("status") || "OPEN";
    
    const jobs = await prisma.jobTicket.findMany({
      where: {
        status: status
      },
      orderBy: {
        createdAt: "desc"
      }
    });

    return NextResponse.json({ success: true, jobs });

  } catch (error: any) {
    console.error("Lỗi GET /api/jobs:", error);
    return NextResponse.json({ error: "Thất bại khi lấy danh sách việc" }, { status: 500 });
  }
}
