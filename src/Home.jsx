import React from "react";
import web from "../src/images/wa.png";
import Common from "./Common";

const Home = () => {
  return (	  
    <div>	 
      <Common
        name="Grow your business with"
        imgsrc={web}
        visit="/service"
        btname="Get Started"
      />
    </div>	   
  );	 
};

export default Home;