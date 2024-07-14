import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "../styles/globals.css";
import RootLayout from "@/components/RootLayout";
import { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";

const inter = Lato({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "Geji",
  description: "Geji marketplace",
};

export default function App({
  Component, pageProps
}: AppProps) {
  return (

    <SessionProvider
      // Provider options are not required but can be useful in situations where
      // you have a short session maxAge time. Shown here with default values.
      session={pageProps.session}
    >
      <RootLayout>
        <Component {...pageProps} />
      </RootLayout>
    </SessionProvider>
  );
}
