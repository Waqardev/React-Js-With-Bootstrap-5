import React from "react";
import web from "../src/images/wa.png";
import { NavLink } from "react-router-dom";
import Card from "./Card";
import Sdata from "./Sdata";

const Service = () => {
  return (
    <div>
      <div className="my-5">
        <h1 className="text-center">Our Services</h1>
      </div>

      {Sdata.map((val, ind) => {
        return <Card key={ind} imgsrc={val.imgsrc} title={val.title} />;
      })}
    </div>
  );
};
export default Service;