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

    const { dna, products } = await req.json();
    const userId = (session.user as any).id;

    if (!userId) {
       return NextResponse.json({ error: "User ID not found in session" }, { status: 400 });
    }

    // Upsert DNA: Create if not exists, update if exists
    const savedDna = await prisma.userDNA.upsert({
      where: { userId },
      update: {
        brandColors: dna.brandColors?.join(","),
        brandColor1: dna.brandColors?.[0],
        brandColor2: dna.brandColors?.[1],
        websiteUrl: dna.websiteUrl,
        companyName: dna.companyName,
        profession: dna.profession,
        jobTitle: dna.jobTitle,
        address: dna.address,
        phone: dna.phone,
        toneOfVoice: dna.toneOfVoice,
        extraGuidelines: dna.extraGuidelines,
        competitors: JSON.stringify(dna.competitors),
        niches: JSON.stringify(dna.niches),
      },
      create: {
        userId,
        brandColors: dna.brandColors?.join(","),
        brandColor1: dna.brandColors?.[0],
        brandColor2: dna.brandColors?.[1],
        websiteUrl: dna.websiteUrl,
        companyName: dna.companyName,
        profession: dna.profession,
        jobTitle: dna.jobTitle,
        address: dna.address,
        phone: dna.phone,
        toneOfVoice: dna.toneOfVoice,
        extraGuidelines: dna.extraGuidelines,
        competitors: JSON.stringify(dna.competitors),
        niches: JSON.stringify(dna.niches),
      },
    });

    // Handle Products if provided
    if (products && Array.isArray(products)) {
        // Clear old products and create new ones for simplicity
        await prisma.product.deleteMany({ where: { dnaId: savedDna.id } });
        await prisma.product.createMany({
            data: products.map((p: any) => ({
                dnaId: savedDna.id,
                title: p.title || "Untitled Product",
                description: p.description,
                price: p.price,
                imageUrl: p.imageUrl,
            }))
        });
    }

    return NextResponse.json({ success: true, dna: savedDna });
  } catch (error: any) {
    console.error("Error saving DNA:", error);
    return NextResponse.json({ error: "Failed to save DNA" }, { status: 500 });
  }
}
