import { NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../auth/[...nextauth]/route";
import { prisma } from "../../../lib/prisma";

export async function POST(req: Request) {
  try {
    const session = await getServerSession(authOptions);

    if (!session || !session.user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { dna } = await req.json();
    const userId = (session.user as any).id;

    if (!userId) {
       return NextResponse.json({ error: "User ID not found in session" }, { status: 400 });
    }

    // Upsert DNA: Create if not exists, update if exists
    const savedDna = await prisma.userDNA.upsert({
      where: { userId },
      update: {
        brandColor1: dna.brandColor1,
        brandColor2: dna.brandColor2,
        websiteUrl: dna.websiteUrl,
        companyName: dna.companyName,
        profession: dna.profession,
        jobTitle: dna.jobTitle,
        address: dna.address,
        phone: dna.phone,
      },
      create: {
        userId,
        brandColor1: dna.brandColor1,
        brandColor2: dna.brandColor2,
        websiteUrl: dna.websiteUrl,
        companyName: dna.companyName,
        profession: dna.profession,
        jobTitle: dna.jobTitle,
        address: dna.address,
        phone: dna.phone,
      },
    });

    return NextResponse.json({ success: true, dna: savedDna });
  } catch (error: any) {
    console.error("Error saving DNA:", error);
    return NextResponse.json({ error: "Failed to save DNA" }, { status: 500 });
  }
}
