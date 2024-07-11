import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

const Home = () => {
  let data = "Hello world";

  const { pathname } = useLocation();

  return (
    <div className="flex flex-col">
      <nav className="w-full h-[80px] bg-gray-100 flex flex-row justify-around items-center border-b-2">
        <Link to={`/home`}>
          <span
            className={`${
              pathname === "/home"
                ? "text-red-500 px-6 py-2 bg-black  font-medium rounded text-xl cursor-pointer"
                : "text-white px-6 py-2 bg-black  font-medium rounded text-xl cursor-pointer"
            }`}
          >
            About
          </span>
        </Link>
        <Link to={`/home/contact`}>
          <span
            className={`${
              pathname === "/home/contact"
                ? "text-red-500 px-6 py-2 bg-black  font-medium rounded text-xl cursor-pointer"
                : "text-white px-6 py-2 bg-black  font-medium rounded text-xl cursor-pointer"
            }`}
          >
            Contact
          </span>
        </Link>
      </nav>
      <Outlet context={{ data, test: "test data" }} />
    </div>
  );
};

export default Home;
