import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "../styles/globals.css";
import Header from '../components/Header'
import Footer from '../components/Footer'
import RootLayout from "@/components/RootLayout";
import { AppProps } from "next/app";

const inter = Lato({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "Geji",
  description: "Geji marketplace",
};

export default function App({
  Component,
}: AppProps) {
  return (
    

      <RootLayout>
        <Component />
      </RootLayout>
  );
}
