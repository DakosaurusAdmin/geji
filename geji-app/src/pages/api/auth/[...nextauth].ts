import { AuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google"
import { OAuthConfig, ProviderType } from "next-auth/providers/index";

const providers = [
  GoogleProvider({
    clientId: process.env.REACT_APP_GOOGLE_CLIENT_ID || "",
    clientSecret: process.env.REACT_APP_GOOGLE_CLIENT_SECRET || ""
  })
]

const options:AuthOptions = {
  providers, 
  session: {
    strategy: 'jwt',
   },
}

export const providerMap:Array<OAuthConfig<any>> = providers.reduce((accumulator,currentVal) => ([
  ...accumulator,
 currentVal
]) as Array<OAuthConfig<any>>, [] as Array<OAuthConfig<any>>)

export default NextAuth(options)