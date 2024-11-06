import React from "react";
import Layout from "./Layout";
import Link from "next/link";

const Footer = () => {
  return (
    <footer
      className="w-full border-t-2 border-solid border-dark 
    font-medium text-lg"
    >
      <Layout className="py-8 flex items-center justify-between">
        <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
        <div className="flex items-center ">
          Build With <span className="text-primary text-2xl px-1">&#9825;</span>
          By&nbsp;
          <Link
            href="http://fiverr.com"
            className="underline underline-offset-2"
            target={"_blank"}
          >
            Munsif Ahamed
          </Link>
        </div>
        <div>
          <Link href="/">Home</Link>
        </div>
        <Link href="/">This</Link>
      </Layout>
    </footer>
  );
};

export default Footer;
