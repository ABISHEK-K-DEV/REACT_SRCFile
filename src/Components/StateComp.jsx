import React, { useState } from "react";
import { ButtonFun } from "./FunctionComp";
import { useParams } from "react-router-dom";

const StateComp = () => {
  // const [state, setState] = useState(false);

  // const HandleClick = () => {
  //   console.log("trigger")
  //   setState(!state);
  // };

  const { uniqueid } = useParams();

  console.log(uniqueid, "id");

  const [count, setCount] = useState(0);

  const Increment = () => {
    if (count < 500) {
      setCount((prev) => prev + 100);
    }
  };

  const Decrement = () => {
    if (count > 0) {
      setCount((prev) => prev - 100);
    }
  };

  return (
    <div>
      {/* <p className="text-xl mb-5 ml-20">Count : {count}</p> */}
      <p className="text-4xl font-bold">id: {uniqueid}</p>
      {/* <button
        // onClick={() => setCount((prev) => prev + 1)}
        onClick={Increment}
        className="bg-green-500 px-5 py-2 rounded text-white mr-5"
      >
        Increment
      </button>
      <button
        // onClick={() => setCount((prev) => prev - 1)}
        onClick={Decrement}
        className="bg-blue-500 px-5 py-2 rounded text-white"
      >
        Decrement
      </button> */}

      {/* <div className="flex gap-5">
        <ButtonFun props={{ data: "Increment", HandleClick: Increment }} />

        <ButtonFun props={{ data: "Decrement", HandleClick: Decrement }} />
      </div> */}
    </div>
  );
};

export default StateComp;
