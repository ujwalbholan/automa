import React from "react";
import { Navbar } from "@/components/global/navbar";
import Footer from "@/components/global/footer";
import { BackgroundBeams } from "@/components/ui/background-beams";

type Props = { children: React.ReactNode };

const Layout = (props: Props) => {
  return (
    <>
      <Navbar />
      <BackgroundBeams></BackgroundBeams>
      {props.children}
      <Footer />
    </>
  );
};

export default Layout;
