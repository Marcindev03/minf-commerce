import NextAuth from "next-auth";
import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { nanoid } from "nanoid";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        const email = credentials?.email;
        const password = credentials?.password;

        if (
          email &&
          email === process.env.ADMIN_EMAIL &&
          password &&
          process.env.ADMIN_PASSWORD === password
        ) {
          return {
            id: nanoid(),
            name: "Admin",
            email,
          };
        }

        return null;
      },
    }),
  ],
};

export default NextAuth(authOptions);
