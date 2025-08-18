import React from "react";
import Container from "../assets/Container";
import Hero from "../assets/Hero";
import Margin from "../assets/Margin";
import Skills from "../assets/Skills";
import Works from "../assets/Works";
import Hobbies from "../assets/Hobbies";
import ContactSection from "../assets/ContactSection";

const Home = () => {
  return (
    <div>
      <Hero />
      <Skills />
      <Works />
      <Hobbies />
      <ContactSection />
    </div>
  );
};

export default Home;
