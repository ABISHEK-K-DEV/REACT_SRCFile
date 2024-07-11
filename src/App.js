import React from "react";
import "./App.css";
import Routers from "./Components/Routers";
import { AuthContext } from "./Components/ContextFunction";
import ContextFunction from "./Components/ContextFunction";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import UIcomp from "./Components/CRUD/UIcomp";

const App = () => {
  return (
    <div className="">
      <ContextFunction>
        <Routers />
        {/* <UIcomp /> */}
      </ContextFunction>
      <ToastContainer />
    </div>
  );
};

export default App;
