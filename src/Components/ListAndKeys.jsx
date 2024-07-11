import React, { useEffect, useState } from "react";
import ListMap from "./ListMap";

const ListAndKeys = () => {
  const staticData = [
    { id: 1, name: "Vignesh1234", age: "23", email: "vignesh@gmail.comg" },
    { id: 2, name: "example", age: "23", email: "example@gmail.comg" },
    { id: 3, name: "Vignesh", age: "23", email: "vignesh@gmail.comg" },
    { id: 4, name: "example", age: "23", email: "eakis@gmail.comhih" },
  ];

  const [state, setState] = useState([]);

  const [data, setData] = useState(false);

  let getApi = () => {
    setState(staticData);
  };

  useEffect(() => {
    // console.log("component did mount");
    getApi();
  }, []);

  console.log("uewuehdsvuggjissdd");

  const updateState = () => {
    setState((prevState) =>
      prevState.map((item) =>
        item.id === 1 ? { ...item, name: "John Updated" } : item
      )
    );
  };

  // useEffect(() => {
  //   console.log("component did update");
  //   getApi();
  // }, [data]);

  // useEffect(() => {
  //   return () => {
  //     console.log("component will unmount")
  //   };
  // }, []);

  return (
    <div className="w-full h-screen grid grid-cols-2 md:grid-cols-4 gap-10 place-content-center p-10">
      <ListMap props={{ state }} />
      <p>{data ? "Hello" : "Vanakam"}</p>
      <button onClick={() => setData(!data)}>Trigger</button>
      <button onClick={updateState}>Update State</button>
    </div>
  );
};

export default ListAndKeys;
