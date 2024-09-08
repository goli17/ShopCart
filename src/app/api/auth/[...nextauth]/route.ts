import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
// import User from "../../../../../models/user";  // Commenting out the user model import
// import { connectToDB } from "../../../../../util/database";  // Commenting out the database connection import

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
        // await connectToDB();  // Commenting out the database connection

        // const checkEmail = await User.find({ email: user?.email });  // Commenting out the email check

        // if (checkEmail.length === 0 && user?.email) {
        //   await User.insertMany({ name: user.name, email: user.email });  // Commenting out the user creation
        // }
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
