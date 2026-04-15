import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import prisma from "@/lib/prisma";

export async function GET() {
  const session = await getServerSession();
  if (!session?.user?.email) {
    return NextResponse.json({ verified: false, reason: "not_authenticated" });
  }

  const user = await prisma.user.findUnique({
    where: { email: session.user.email },
    include: {
      trainerMemberships: {
        include: { organization: true },
        where: { isApproved: true },
      },
    },
  });

  if (!user) return NextResponse.json({ verified: false, reason: "user_not_found" });

  const activeMembership = user.trainerMemberships.find(
    (m) => m.organization.isVerified
  );

  if (!activeMembership) {
    return NextResponse.json({ verified: false, reason: "no_verified_org" });
  }

  return NextResponse.json({
    verified: true,
    membership: {
      id: activeMembership.id,
      role: activeMembership.role,
      organization: {
        id: activeMembership.organization.id,
        name: activeMembership.organization.name,
        slug: activeMembership.organization.slug,
        logoText: activeMembership.organization.logoText,
        primaryColor: activeMembership.organization.primaryColor,
        secondaryColor: activeMembership.organization.secondaryColor,
        website: activeMembership.organization.website,
        email: activeMembership.organization.email,
        phone: activeMembership.organization.phone,
        address: activeMembership.organization.address,
      },
    },
  });
}
