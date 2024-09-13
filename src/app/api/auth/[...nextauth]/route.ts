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
    async session({ session, token }: any) {
      // Connect to DB
      await connectToDB();
      const dbUser = await User.findOne({ email: session.user.email });

      if (dbUser) {
        session.user.id = dbUser._id.toString();
      }

      return session;
    },

    async signIn({ account, profile }: any) {
      try {
        await connectToDB();
        console.log("Connected to DB");

        const checkEmail = await User.findOne({ email: profile.email });

        if (!checkEmail) {
          await User.create({ name: profile.name, email: profile.email });
          console.log("New user created");
        }
        return true;
      } catch (error) {
        console.error("Error during sign-in:", error);
        return false;
      }
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
