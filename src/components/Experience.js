import React from "react";
import { motion, useScroll } from "framer-motion";
import { useRef } from "react";
import LiIcon from "./LiIcon";

const Details = ({
  position,
  company,
  companyLink,
  time,
  address,
  work,
  skills,
}) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col 
                        items-center justify-between gap-4"
    >
      <div>
        <LiIcon reference={ref} />
        <motion.div
          initial={{ y: 50 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 0.5, type: "spring" }}
        >
          <h3 className="capitalize font-bold text-2xl ">
            {position}&nbsp;
            <a
              href={companyLink}
              target={"_blank"}
              className="text-primary capitalize"
            >
              @{company}
            </a>
          </h3>
          <span className="capitalize font-medium text-dark/75 ">
            {time} | {address}
          </span>
          <p className="font-medium w-full  ">{work}</p>
          <p className="font-medium w-full ">
            <span className="font-medium  text-dark/70">Skills: </span>
            {skills.map((skill, index) =>
              skills.length - 1 === index ? skill : `${skill}, `
            )}
          </p>
        </motion.div>
      </div>
    </li>
  );
};

const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div className="my-40">
      <h2 className="font-bold text-8xl mb-20 w-full text-center text-dark">
        Experience
      </h2>
      <div ref={ref} className="w-[75%] mx-auto relative">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top "
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4">
          <Details
            position="Frontend Developer"
            company="Google"
            companyLink="google.com"
            time="2019 - 2021"
            address="Mountain View, CA"
            work="Worked on the Google Search Engine and other projects at 
            Google as a Frontend Developer for 2 years. I have worked on the Google 
            Search Engine and other projects at Google as a Frontend Developer for 2 years."
            skills={["React", "JavaScript", "HTML", "CSS"]}
          />
          <Details
            position="Frontend Developer"
            company="Google"
            companyLink="google.com"
            time="2019 - 2021"
            address="Mountain View, CA"
            work="Worked on the Google Search Engine and other projects at 
            Google as a Frontend Developer for 2 years. I have worked on the Google 
            Search Engine and other projects at Google as a Frontend Developer for 2 years."
            skills={["React", "JavaScript", "HTML", "CSS"]}
          />
          <Details
            position="Frontend Developer"
            company="Google"
            companyLink="google.com"
            time="2019 - 2021"
            address="Mountain View, CA"
            work="Worked on the Google Search Engine and other projects at 
            Google as a Frontend Developer for 2 years. I have worked on the Google 
            Search Engine and other projects at Google as a Frontend Developer for 2 years."
            skills={["React", "JavaScript", "HTML", "CSS"]}
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;
