import { AuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google"
import CredentialsProvider from "next-auth/providers/credentials"
import { OAuthConfig } from "next-auth/providers/index";

const providers = [

  CredentialsProvider({
    // The name to display on the sign in form (e.g. "Sign in with...")
    name: "",

    // `credentials` is used to generate a form on the sign in page.
    // You can specify which fields should be submitted, by adding keys to the `credentials` object.
    // e.g. domain, username, password, 2FA token, etc.
    // You can pass any HTML attribute to the <input> tag through the object.

    credentials: {
      username: { label: "Username", type: "text", placeholder: "your name" },
      password: { label: "Password", type: "password" }
    },
    async authorize(credentials, _req) {
      // const res = await fetch('localHost', {
      //   method: 'POST',
      //   body: JSON.stringify({ user: { ...credentials } }),
      //   headers: { "Content-Type": "application/json" }
      // });

      const user  = {
        id: '1',
        name: 'test user',
        email: 'test@test.com',
        image: '/testUserAvatar.png'
      }


      return user;
    }
  }),
  GoogleProvider({
    clientId: process.env.REACT_APP_GOOGLE_CLIENT_ID || "",
    clientSecret: process.env.REACT_APP_GOOGLE_CLIENT_SECRET || ""
  }),
  

]

const options:AuthOptions = {
  providers, 
  session: {
    strategy: 'jwt',
   },
   pages:{
     signIn:'/signIn'
   }
}

export const providerMap:Array<OAuthConfig<any>> = providers.reduce((accumulator,currentVal) => ([
  ...accumulator,
 currentVal
]) as Array<OAuthConfig<any>>, [] as Array<OAuthConfig<any>>)

export default NextAuth(options)