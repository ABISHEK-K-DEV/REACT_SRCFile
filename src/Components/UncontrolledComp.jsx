import React, { useContext, useRef } from "react";
import { AuthContext } from "./ContextFunction";

const UncontrolledComp = () => {

  let data = useContext(AuthContext);

  console.log(data, "daat")

  const userNameRef = useRef();

  let handleSubmit = (e) => {
    e.preventDefault();
    console.log(userNameRef.current.value, "form");
  };

  return (
    <div className="w-full h-screen grid place-content-center">
      <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          ref={userNameRef}
          className="px-4 py-2 border border-blue-500 rounded"
          required
        />
        <p>{data}</p>

        <div className="w-full flex gap-2">
          <button
            className="w-full py-2 rounded text-white bg-green-500"
            type="submit"
          >
            Submit
          </button>
          <button
            className="w-full py-2 rounded text-white bg-green-500"
            type="reset"
          >
            Reset
          </button>
        </div>
      </form>
    </div>
  );
};

export default UncontrolledComp;
