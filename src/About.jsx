import React from "react";
import web from "../src/images/hero.png";
import Common from "./Common";

const About = () => {
  return (
    <div>
      <Common
        name="Welcome to about us page"
        imgsrc={web}
        visit="/contact"
        btname="Contact Now"
      />
    </div>
  );
};
export default About;