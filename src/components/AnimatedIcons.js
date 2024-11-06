import { motion } from "framer-motion";
import Image from "next/image";
import ContactPerson from "../../public/images/svgs/ContactPerson.svg";
import Developer from "../../public/images/svgs/Developer.svg";
import GrowTree from "../../public/images/svgs/GrowTree.svg";

const AnimatedIcons = () => {
  // Define blinking variants for the icon that's currently blinking
  const blinkingIcon = {
    initial: { opacity: 1, scale: 1 },
    animate: {
      opacity: [1, 0.7, 1], // Blinking effect
      scale: [1, 1.1, 1], // Slight scale during blink
      transition: {
        duration: 1.5, // Blink duration
        repeat: Infinity, // Repeat infinitely
        repeatType: "loop", // Continuous looping
      },
    },
  };

  // Container animation to stagger the animation timing for each icon
  const containerVariants = {
    animate: {
      transition: {
        staggerChildren: 0.5, // Delay between icon animations (controls when next icon starts blinking)
      },
    },
  };

  return (
    <motion.div
      className="absolute left-[6%] bottom-[33%] ml-0 flex flex-col items-center justify-center space-y-16"
      variants={containerVariants}
      initial="initial"
      animate="animate"
    >
      {/* Icon 1 - ContactPerson */}
      <motion.div variants={blinkingIcon} className="w-14 h-auto">
        <Image
          src={ContactPerson}
          alt="Contact Person"
          className="w-full h-full"
        />
      </motion.div>

      {/* Icon 2 - Developer */}
      <motion.div variants={blinkingIcon} className="w-12 h-auto">
        <Image src={Developer} alt="Developer" className="w-full h-full" />
      </motion.div>

      {/* Icon 3 - GrowTree */}
      <motion.div variants={blinkingIcon} className="w-14 h-auto">
        <Image src={GrowTree} alt="Grow Tree" className="w-full h-full" />
      </motion.div>
    </motion.div>
  );
};

export default AnimatedIcons;
