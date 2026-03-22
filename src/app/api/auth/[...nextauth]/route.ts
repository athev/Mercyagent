import NextAuth, { AuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "../../../../lib/prisma";

export const authOptions: AuthOptions = {
  adapter: PrismaAdapter(prisma) as any, // Using the standard adapter typings
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    }),
  ],
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async session({ session, token }) {
      if (session?.user && token.sub) {
        (session.user as any).id = token.sub; // Inject user id into session
      }
      return session;
    },
    async jwt({ token, user }) {
      if (user) {
        token.sub = user.id;
      }
      return token;
    },
  },
  pages: {
    signIn: "/onboarding", // Redirect to special onboarding instead of generic login page
  },
  secret: process.env.NEXTAUTH_SECRET || "fallback_secret_for_local_dev",
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
