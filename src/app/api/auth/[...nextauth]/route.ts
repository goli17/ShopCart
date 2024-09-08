import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import User from "../../../../../models/user";
import { connectToDB } from "../../../../../util/database";

// Define the auth options
const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID as string,
      clientSecret: process.env.GOOGLE_SECRET as string,
    }),
  ],
  callbacks: {
    async session({ session, token, user }: any) {
      return session;
    },

    async signIn({ account, profile, user, credentials }: any) {
      try {
        await connectToDB();

        const checkEmail = await User.find({ email: user?.email });

        if (checkEmail.length === 0 && user?.email) {
          await User.insertMany({ name: user.name, email: user.email });
        }
        return true;
      } catch (error) {
        console.log(error);
        return false;
      }
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
