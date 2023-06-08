import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        const temporaryPreviewUser = {
          id: "1",
          name: "Preview User",
          email: "empty_email@example.com",
        };
        const password = credentials?.password;

        if (password && process.env.PREVIEW_PASSWORD === password) {
          return temporaryPreviewUser;
        }

        return null;
      },
    }),
  ],
});

export { handler as GET, handler as POST };
