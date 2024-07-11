import React from "react";
import { Link, useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  return (
    <div className="w-full flex flex-col gap-8 items-center">
      <h1 className="text-6xl">Page Not found Error: 404</h1>
      <Link to={`/`} className="px-5 py-2 bg-red-100 text-black rounded">
        Edit
      </Link>
      <button
        onClick={handleClick}
        className="px-5 py-2 bg-red-100 text-black rounded"
      >
        Submit
      </button>
    </div>
  );
};
export default NotFound;
