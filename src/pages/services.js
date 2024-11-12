import React from "react";
import Head from "next/head";
import Layout from "@/components/Layout";
import Services from "@/components/Services";

const services = () => {
  return (
    <div>
      <Head>
        <title>Services | Munsif Ahamed</title>
        <meta
          name="description"
          content="Discover a range of services offered by Munsif Ahamed including full-stack development, mobile app creation, and AI integrations."
        />
      </Head>
      <main className="flex mt-0 p-0 w-full flex-col items-center justify-center">
        <div className="w-full h-full inline-block z-0 bg-light py-8 px-32">
          <Services />
        </div>
      </main>
    </div>
  );
};

export default services;
