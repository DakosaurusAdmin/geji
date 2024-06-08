import React, { ReactElement } from "react";
import Header from "./Header";
import Footer from "./Footer";

interface Props {
  children: ReactElement;
}

const RootLayout = ({ children }: Props) => {
  return (
    <div className="container flex flex-col min-h-[100vh] mx-auto">
      <Header />
      <div className="flex flex-col flex-1 m-auto mt-0 w-full">
        {children}
      </div>

      <Footer />
    </div>
  );
};

export default RootLayout;