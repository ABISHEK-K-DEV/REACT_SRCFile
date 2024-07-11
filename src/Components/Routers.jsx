import React from "react";
import { Route, Routes } from "react-router-dom";
import ListAndKeys from "./ListAndKeys";
import StateComp from "./StateComp";
import NotFound from "./NotFound";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import {
  ControlledComp,
  ControlledCompThree,
  ControlledCompTwo,
} from "./ControlledComp";
import UncontrolledComp from "./UncontrolledComp";
import Create from "./CRUD/Create";
import Read from "./CRUD/Read";
import CreateCode from "./CRUD/CreateCode";
import ReadCode from "./CRUD/ReadCode";

const Routers = () => {
  return (
    <>
      <Routes>
        <Route index element={<Read />} />

        <Route path="/add" element={<Create/>} />
        
        <Route index element={<ReadCode />} />

        <Route path="/addform" element={<CreateCode/>} />

        <Route path="/editform/:id" element={<CreateCode/>} />

        <Route path="/edit/:id" element={<Create/>} />

        <Route path="/controlled" Component={UncontrolledComp} />

        <Route path="*" element={<NotFound />} />

        <Route path="/state/:uniqueid" Component={StateComp} />

        <Route path="/home" element={<Home />}>
          <Route index element={<About />} />
          <Route path="/home/contact" Component={Contact} />
        </Route>
      </Routes>
    </>
  );
};

export default Routers;
