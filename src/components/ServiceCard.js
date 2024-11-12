// components/ServiceCard.js
import React from "react";
import { motion } from "framer-motion";

const ServiceCard = ({ title, description, price, skills }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, type: "spring" }}
      className="w-full p-6 bg-white border rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
    >
      <h3 className="text-2xl font-bold mb-4 text-primary">{title}</h3>
      <p className="text-dark/75 mb-4">{description}</p>
      <p className="font-semibold text-lg mb-2 text-secondary">
        Starting at ${price}
      </p>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="px-3 py-1 bg-gray-200 rounded-md text-sm"
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

export default ServiceCard;
