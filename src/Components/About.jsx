import React from "react";
import { useOutletContext } from "react-router-dom";

const About = () => {
  const { data, test } = useOutletContext();

  console.log(data, "data");

  return <div className="text-center text-4xl font-bold">{data}</div>;
};

export default About;
