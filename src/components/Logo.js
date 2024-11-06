import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const MotionLink = motion(Link);

const Logo = () => {
  return (
    <>
      <div className="flex items-center justify-center mt-2">
        <MotionLink
          className="w-14 h-14 bg-dark  text-light flex items-center justify-center rounded-full text-xl font-pop font-bold "
          href="/"
          whileHover={{
            backgroundColor: [
              "#003945",
              "#ff5733", // Vibrant orange
              "#1a1a1a", // Charcoal black
              "#2ecc71", // Emerald green
              "#2980b9", // Bright blue
              "#f4d03f", // Yellow
              "#121212", // Dark gray
              "#bdc3c7", // Silver
              "#8e44ad", // Purple
              "#e74c3c", // Bright red
              "#ecf0f1", // Very light gray
              "#2c3e50", // Dark slate
              "#3498db", // Sky blue
            ],
            transition: { duration: 2, repeat: Infinity },
          }}
        >
          MA
        </MotionLink>
      </div>
    </>
  );
};

export default Logo;
