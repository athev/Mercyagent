import NextAuth, { AuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "../../../../lib/prisma";

export const authOptions: AuthOptions = {
  adapter: PrismaAdapter(prisma) as any,
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "DUMMY_ID",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "DUMMY_SECRET",
    }),
    CredentialsProvider({
      name: "Development Login",
      credentials: {
        email: { label: "Email", type: "email", placeholder: "trainer@example.com" },
        password: { label: "Mật khẩu (bất kỳ)", type: "password" }
      },
      async authorize(credentials) {
        if (!credentials?.email) return null;
        
        // Auto-create or find user for dev
        let user = await prisma.user.findUnique({
          where: { email: credentials.email }
        });

        if (!user) {
          user = await prisma.user.create({
            data: {
              email: credentials.email,
              name: credentials.email.split('@')[0],
              image: `https://api.dicebear.com/7.x/avataaars/svg?seed=${credentials.email}`,
            }
          });
        }

        return user;
      }
    }),
  ],
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
  debug: true,
  callbacks: {
    async session({ session, token }) {
      if (session?.user && token.sub) {
        (session.user as any).id = token.sub;
        
        // CHECK DNA in database
        const dna = await prisma.userDNA.findUnique({
          where: { userId: token.sub }
        });
        (session.user as any).hasDNA = !!dna;
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
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
