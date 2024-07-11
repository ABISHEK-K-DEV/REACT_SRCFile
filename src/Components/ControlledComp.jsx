import React, { useEffect } from "react";
import { useState } from "react";

export const ControlledComp = () => {
  const [formData, setFormData] = useState("");

  let handleSumit = (e) => {
    e.preventDefault();
    console.log(formData, "form");
  };

  return (
    <div className="w-full h-screen grid place-content-center">
      <form
        className="flex flex-col gap-5"
        onSubmit={handleSumit}
        onReset={() => setFormData("")}
      >
        <input
          type="text"
          placeholder="Email ID"
          value={formData}
          onChange={(e) => setFormData(e.target.value)}
          className="px-4 py-2 border border-blue-500 rounded"
          required
        />

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

export const ControlledCompTwo = () => {
  let initialState = {
    userName: "",
    emailId: "",
    password: "",
    age: "",
  };

  const [formData, setFormData] = useState(initialState);

  let handleSumit = (e) => {
    e.preventDefault();
    console.log(formData, "form");
  };

  return (
    <div className="w-full h-screen grid place-content-center">
      <form
        className="flex flex-col gap-5"
        onSubmit={handleSumit}
        onReset={() => setFormData(initialState)}
      >
        <input
          type="text"
          placeholder="Username"
          value={formData.userName}
          onChange={(e) =>
            setFormData({ ...formData, userName: e.target.value })
          }
          className="px-4 py-2 border border-blue-500 rounded"
          required
        />
        <input
          type="email"
          placeholder="Email ID"
          value={formData.emailId}
          onChange={(e) =>
            setFormData({ ...formData, emailId: e.target.value })
          }
          className="px-4 py-2 border border-blue-500 rounded"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={formData.password}
          onChange={(e) =>
            setFormData({ ...formData, password: e.target.value })
          }
          className="px-4 py-2 border border-blue-500 rounded"
          required
        />
        <input
          type="number"
          placeholder="Age"
          value={formData.age}
          onChange={(e) => setFormData({ ...formData, age: e.target.value })}
          className="px-4 py-2 border border-blue-500 rounded"
          required
        />

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

export const ControlledCompThree = () => {
  let initialState = {
    userName: "",
    emailId: "",
    password: "",
    age: "",
  };

  const [formData, setFormData] = useState(initialState);

  let handleSumit = (e) => {
    e.preventDefault();
    console.log(formData, "form");
  };

  let data = "EmailId";

  const obj = {
    [data]: "vicky@gmail.com",
  };

  console.log(obj, "obj ");

  const handleChange = (e) => {
    const { name, value } = e.target;

    console.log(name, value, "event");

    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className="w-full h-screen grid place-content-center">
      <form
        className="flex flex-col gap-5"
        onSubmit={handleSumit}
        onReset={() => setFormData(initialState)}
      >
        <input
          type="text"
          placeholder="Username"
          name="userName"
          value={formData.userName}
          onChange={handleChange}
          className="px-4 py-2 border border-blue-500 rounded"
          required
        />
        <input
          type="email"
          placeholder="Email ID"
          name="emailId"
          value={formData.emailId}
          onChange={handleChange}
          className="px-4 py-2 border border-blue-500 rounded"
          required
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          className="px-4 py-2 border border-blue-500 rounded"
          required
        />
        <input
          type="number"
          placeholder="Age"
          name="age"
          value={formData.age}
          onChange={handleChange}
          className="px-4 py-2 border border-blue-500 rounded"
          required
        />

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
