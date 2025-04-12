import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { mockBusiness } from "../../../../lib/mockBusiness";
import "dotenv/config";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      authorize(credentials) {
        if (!credentials) return null;
        const user = mockBusiness.find(
          u => u.email === credentials.email && u.password === credentials.password
        );
        if (user) {
          return { ...user, id: user.id.toString() };
        }
        return null;
      },
    }),
  ],
  session: {
    strategy: 'jwt',
  },
  pages: {
    signIn: '/login',
  },
  secret: process.env.JWT_SECRET,
});

export { handler as GET, handler as POST };
