import GoogleProvider from 'next-auth/providers/google'

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code"
        }
      }
    })
  ],
  callbacks: {
    //Invoked on succesful signin
    async signin({ profile }) {
      // 1. Connect to the db

      // 2. check if user exists in the db

      // 3. If user doesn't exist, cre ate a new user in db

      // 4. If user exists, return true to allow signin
    },
    // Modifies the session object
    async session({ session }) {
      // 1. Get the user from the db

      // 2. Assign the user id to the session

      // 3. Return the session
    }
  }
};