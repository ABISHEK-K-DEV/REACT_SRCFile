import React from "react";
import { useOutletContext } from "react-router-dom";

const Contact = () => {
  const { data } = useOutletContext();

  console.log(data, "data from contect");

  return (
    <div className="w-full h-screen grid place-content-center text-4xl font-bold">
      {data}
    </div>
  );
};

export default Contact;
