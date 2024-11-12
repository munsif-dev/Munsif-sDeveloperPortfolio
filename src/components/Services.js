// components/Services.js
import React from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const services = [
    {
      title: "Full-Stack Web Development",
      description:
        "Building responsive and modern web applications from scratch.",
      price: 1000,
      skills: ["React", "Node.js", "MongoDB", "Express"],
    },
    {
      title: "Mobile App Development",
      description:
        "Creating cross-platform mobile apps with a seamless experience.",
      price: 800,
      skills: ["Flutter", "React Native"],
    },
    {
      title: "Landing Page Development",
      description: "Designing and developing high-converting landing pages.",
      price: 300,
      skills: ["HTML", "CSS", "JavaScript"],
    },
    {
      title: "AI Chatbot Development",
      description:
        "Integrating AI chatbots for customer support and engagement.",
      price: 1200,
      skills: ["Python", "Dialogflow", "Machine Learning"],
    },
    {
      title: "Backend Development with Django",
      description:
        "Developing robust backend systems using Django and REST APIs.",
      price: 900,
      skills: ["Django", "Python", "PostgreSQL"],
    },
    {
      title: "ML Integration",
      description: "Integrating machine learning models into applications.",
      price: 1500,
      skills: ["TensorFlow", "scikit-learn", "Python"],
    },
    {
      title: "API Development",
      description:
        "Creating RESTful and GraphQL APIs for scalable applications.",
      price: 500,
      skills: ["Node.js", "Express", "GraphQL"],
    },
  ];

  return (
    <div className="my-3 ">
      <h2 className="font-bold text-8xl mt-0 mb-14 w-full text-center text-dark">
        Services
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 px-4">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            title={service.title}
            description={service.description}
            price={service.price}
            skills={service.skills}
          />
        ))}
      </div>
    </div>
  );
};

export default Services;
