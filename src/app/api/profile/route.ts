import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route";
import { prisma } from "@/lib/prisma";

export const dynamic = 'force-dynamic';

export async function GET(req: NextRequest) {
    const session = await getServerSession(authOptions);

    if (!session?.user?.id) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    try {
        const userId = session.user.id;

        const userWithData = await prisma.user.findUnique({
            where: { id: userId },
            include: {
                dna: { include: { products: true } },
                courses: { orderBy: { updatedAt: 'desc' } },
                tools: { orderBy: { createdAt: 'desc' } },
                agents: { orderBy: { createdAt: 'desc' } },
                tickets: { orderBy: { updatedAt: 'desc' } }
            }
        });

        return NextResponse.json({
            dna: userWithData?.dna,
            courses: userWithData?.courses || [],
            tools: userWithData?.tools || [],
            agents: userWithData?.agents || [],
            tickets: userWithData?.tickets || []
        });
    } catch (error) {
        console.error("Profile API Error:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}
