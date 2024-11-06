import React from "react";
import Head from "next/head";
import Layout from "@/components/Layout";
import AnimatedText from "@/components/AnimatedText";
import Image from "next/image";
import profileInsta from "../../public/images/profile/Profile-2.png";
import { useMotionValue, useSpring, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Certificates from "@/components/Certificates";

const AnimatedNumbers = ({ value }) => {
  const ref = useRef(null);

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const inInView = useInView(ref, { once: true });
  useEffect(() => {
    if (inInView) {
      motionValue.set(value);
    }
  }, [inInView, value, motionValue]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0);
      }
    });
  }, [springValue, value]);

  return <span ref={ref}></span>;
};

const about = () => {
  return (
    <div>
      <Head>
        <title>About Munsif Ahamed</title>
        <meta
          name="description"
          content="Munsif Ahamed is a 
              full-stack developer based in Sri Lanka. He specializes
              in building web applications using React.js and Node.js."
        />
      </Head>
      <main className="flex w-full flex-col items-center justify-center">
        <Layout className="pt-16">
          <AnimatedText text="Passion Fuels Purpose!" className="mb-12" />
          <div className="grid w-full grid-cols-9 gap-16">
            <div
              className="col-span-3 flex flex-col items-start
                         justify-start "
            >
              <h2
                className="mb-4 text-lg font-bold uppercase
                          text-dark/75"
              >
                About Me
              </h2>

              <p className="font-medium">
                Hi, I'm CodeBucks, a web developer and UI/UX designer with a
                passion for creating beautiful, functional, and user-centered
                digital experiences. With 4 years of experience in the field. I
                am always looking for new and innovative ways to bring my
                clients' visions to life.
              </p>
              <p className=" my-4 font-medium">
                I believe that design is about more than just making things look
                pretty – it's about solving problems and creating intuitive,
                enjoyable experiences for users.
              </p>
              <p className="font-medium">
                Whether I'm working on a website, mobile app, or other digital
                product, I bring my commitment to design excellence and
                user-centered thinking to every project I work on. I look
                forward to the opportunity to bring my skills and passion to
                your next project.
              </p>
            </div>

            <div className="col-span-4 grid grid-cols-2 gap-6">
              <div
                className="col-span-1 relative h-max rounded-2xl 
                        border-2 border-solid border-dark
                                         bg-light p-3"
              >
                <div
                  className="absolute top-0 -right-3 -z-10 w-[102%] 
                        h-[103%] rounded-[2rem] bg-dark"
                />
                <Image
                  src={profileInsta}
                  alt="Munsif Ahamed"
                  className="w-full h-auto rounded-2xl"
                />
              </div>
              <div
                className="col-span-1 relative h-max rounded-2xl 
                        border-2 border-solid border-dark
                                         bg-light p-3"
              >
                <div
                  className="absolute top-0 -right-3 -z-10 w-[102%] 
                        h-[103%] rounded-[2rem] bg-dark"
                />
                <Image
                  src={profileInsta}
                  alt="Munsif Ahamed"
                  className="w-full h-auto rounded-2xl"
                />
              </div>
              <div
                className="col-span-1 relative h-max rounded-2xl 
                        border-2 border-solid border-dark
                                         bg-light p-3"
              >
                <div
                  className="absolute top-0 -right-3 -z-10 w-[102%] 
                        h-[103%] rounded-[2rem] bg-dark"
                />
                <Image
                  src={profileInsta}
                  alt="Munsif Ahamed"
                  className="w-full h-auto rounded-2xl"
                />
              </div>
            </div>

            {/* Experience , clients and projects Info */}
            <div className="col-span-2 flex flex-col items-end  gap-28">
              <div className="flex flex-col justify-center items-end">
                <span className="inline-block text-7xl font-bold text-dark">
                  <AnimatedNumbers value={5} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75">
                  satisfied Clients
                </h2>
              </div>
              <div className="flex flex-col justify-center text-dark items-end">
                <span className="inline-block text-7xl font-bold">
                  <AnimatedNumbers value={10} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75">
                  Projects Completed
                </h2>
              </div>
              <div className="flex flex-col justify-center text-dark items-end">
                <span className="inline-block text-7xl font-bold">
                  <AnimatedNumbers value={1.5} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75">
                  Years of Experience
                </h2>
              </div>
            </div>
          </div>
          <Skills />
          <Experience />
          <Education />
          <Certificates />
        </Layout>
      </main>
    </div>
  );
};

export default about;
