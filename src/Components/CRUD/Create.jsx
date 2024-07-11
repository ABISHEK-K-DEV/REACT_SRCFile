import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

const Create = () => {
  let initialState = {
    userName: "",
    emailId: "",
    password: "",
    age: "",
  };

  const [formData, setFormData] = useState(initialState);

  const [editMode, setEditMode] = useState(false);

  const { id } = useParams();

  const navigate = useNavigate();

  let handleSumit = (e) => {
    e.preventDefault();

    if (editMode) {
      axios
        .put(`http://localhost:7000/users/${id}`, formData)
        .then((res) => {
          if (res.status === 200) {
            toast.success(res.data.message);
            setFormData(initialState);
            navigate("/");
          }
        })
        .catch((err) => console.log(err));
    } else {
      axios
        .post("http://localhost:7000/users", formData)
        .then((res) => {
          if (res.status === 200) {
            toast.success(res.data.message);
            setFormData(initialState);
            navigate("/");
          }
        })
        .catch((err) => console.log(err));
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const getDataById = async () => {
    await axios
      .get(`http://localhost:7000/users/${id}`)
      .then((res) => setFormData(res.data.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    if (id) {
      getDataById();
      setEditMode(true);
    } else {
      setFormData(initialState);
      setEditMode(false);
    }

    //component did update
  }, [id]);

  return (
    <div className="w-full h-screen flex flex-col gap-5 justify-center items-center">
      <h1 className="text-3xl font-bold text-gray-700">
        {editMode ? "Edit Form" : "Add Form"}
      </h1>
      <form
        className="w-[30%] flex flex-col gap-5"
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
            type="reset"
          >
            Reset
          </button>
          <button
            className="w-full py-2 rounded text-white bg-green-500"
            type="submit"
          >
            {editMode ? "Update" : "Submit"}
          </button>
          <Link
            to={"/"}
            className="w-full py-2 rounded text-white bg-green-500 text-center"
          >
            <button type="button">Go Back</button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Create;
