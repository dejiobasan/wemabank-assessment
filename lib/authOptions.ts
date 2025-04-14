import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { mockBusiness } from "./mockBusiness";
import 'dotenv/config';

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      authorize(credentials) {
        if (!credentials) return null;

        const user = mockBusiness.find(
          (u) =>
            u.email === credentials.email &&
            u.password === credentials.password
        );

        if (user) {
          return { ...user, id: user.id.toString() };
        }

        return null;
      },
    }),
  ],
  session: {
    strategy: "jwt",
    maxAge: 180,
  },
  pages: {
    signIn: "/login",
  },
  secret: process.env.JWT_SECRET || "secret",
};
