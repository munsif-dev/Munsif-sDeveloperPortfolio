import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import profilePic from "../../public/images/profile/munsif2.png";
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import { LinkArrow } from "../components/Icons";
import HireMe from "@/components/HireMe";
import AnimatedIcon from "@/components/AnimatedIcons";

export default function Home() {
  return (
    <>
      <Head>
        <title>Munsif Ahamed's Developer Portfolio</title>
        <meta name="description" content="Created using create next app" />
      </Head>
      <main className="flex items-center text-dark w-full min-h-screen">
        <Layout className="pt-0">
          <div className="flex items-center justify-between w-full">
            <div className="w-1/2 pr-8">
              <Image src={profilePic} alt="Munsif" className="w-full h-auto" />
            </div>
            <div className="w-1/2 flex flex-col   ">
              <AnimatedText
                text="Turning Vision Into Reality With Code And Design."
                className="!text-6xl text-left "
              />
              <p className="mt-4 mb-8 text-base font-medium">
                As a skilled full-stack developer, I am dedicated to turning
                ideas into innovative web applications. Explore my latest
                projects and articles, showcasing my expertise in React.js and
                web development.
              </p>
              <div className="flex items-center self-start">
                <Link
                  href="/resume.pdf"
                  target={"_blank"}
                  className="flex items-center bg-dark text-light py-2 px-6 rounded-lg 
                  text-lg border-2 border-solid border-red font-semibold mr-4
                   hover:bg-light hover:text-dark  hover:border-dark"
                  download={true}
                >
                  {/* <span className="mr-2">📃</span>Resume */}
                  Resume <LinkArrow className={"w-6 ml-1"} />
                </Link>
                <Link
                  href="mailto:munsifsaifdev@gmail.com"
                  target={"_blank"}
                  className="ml-4 text-lg font-medium capitalize text-dark underline"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </Layout>
        <HireMe />
        <AnimatedIcon />
      </main>
    </>
  );
}
