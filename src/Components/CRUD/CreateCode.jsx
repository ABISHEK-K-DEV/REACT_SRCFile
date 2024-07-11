import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const CreateCode = () => {
  let { id } = useParams();

  let initialState = {
    userName: "",
    emailId: "",
    number: "",
    password: "",
  };

  const [form, setForm] = useState(initialState);

  const [editMode, setEditMode] = useState(false);

  const handleOnChange = (e) => {
    let { value, name } = e.target;

    setForm((prevForm) => ({ ...prevForm, [name]: value }));

    setForm((prevForm) => {
      return { ...prevForm, [name]: value };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!editMode) {
      await axios
        .post("http://localhost:7000/users", form)
        .then((res) => console.log(res.data))
        .catch((err) => console.log(err));
    } else {
      await axios
        .put(`http://localhost:7000/users/${id}`, form)
        .then((res) => console.log(res.data))
        .catch((err) => console.log(err));
    }
  };

  console.log(form, "heuy")
  useEffect(() => {
    const getDataById = async () => {
      await axios
        .get(`http://localhost:7000/users/${id}`)
        .then((res) => setForm(res.data.data))
        .catch((err) => console.log(err));
    };

    if (id) {
      getDataById();
      setEditMode(true);
    } else {
      setEditMode(false);
    }
  }, []);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your Name"
          name="userName"
          value={form.userName}
          onChange={handleOnChange}
          required
        />
        <input
          type="number"
          placeholder="Enter your Number"
          name="number"
          value={form.number}
          onChange={handleOnChange}
          required
        />
        <input
          type="email"
          placeholder="Enter your Email Id"
          name="emailId"
          value={form.emailId}
          onChange={handleOnChange}
          required
        />
        <input
          type="password"
          placeholder="Enter your Password"
          name="password"
          value={form.password}
          onChange={handleOnChange}
          required
        />
        <button type="submit">{editMode ? "Update" : "Submit"}</button>
      </form>
    </div>
  );
};

export default CreateCode;
