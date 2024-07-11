import React, { useEffect, useState } from "react";
import ListMap from "../ListMap";
import axios from "axios";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { Button, message, Popconfirm } from "antd";

const Read = () => {
  const [state, setState] = useState([]);

  let getApi = async () => {
    await axios
      .get("http://localhost:7000/users")
      .then((res) => setState(res.data.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    // console.log("component did mount");
    getApi();
  }, []);

  // const handleDelete = (id) => {
  //   console.log(id, "uid");
  //   axios
  //     .delete(`http://localhost:7000/users/${id}`)
  //     .then((res) => {
  //       toast.error(res.data.message);
  //       let filteredData = state.filter((d) => d._id !== id);
  //       setState(filteredData);
  //     })
  //     .catch((err) => console.log(err));
  // };

  const confirm = (id) => {
    axios
      .delete(`http://localhost:7000/users/${id}`)
      .then((res) => {
        message.success(res.data.message);
        let filteredData = state.filter((d) => d._id !== id);
        setState(filteredData);
      })
      .catch((err) => console.log(err));
  };

  const cancel = (e) => {
    console.log(e);
    message.error("Click on No");
  };

  return (
    <div className="w-full h-screen flex flex-col gap-5 p-10">
      <div className="w-full flex justify-end px-5">
        <Link
          className="bg-green-500 text-center text-white rounded px-6 py-2"
          to={`/add`}
        >
          Add User
        </Link>
      </div>
      <div className="w-full h-fit grid grid-cols-2 md:grid-cols-4 gap-5 place-content-center p-6">
        {state?.length >= 1 ? (
          state?.map((value) => (
            <div
              className=" bg-red-100 flex flex-col gap-2 rounded justify-center p-5 items-start "
              key={value._id}
            >
              <h1>Name : {value.userName}</h1>
              <h1>Email ID: {value.emailId}</h1>
              <h1>Age : {value.age}</h1>
              <div className="w-full mt-2 flex flex-row justify-between gap-2">
                <Link
                  to={`/edit/${value._id}`}
                  className="w-full bg-blue-500 text-center text-white rounded py-1"
                >
                  Edit
                </Link>
                <Popconfirm
                  title="Delete the task"
                  description="Are you sure to delete this task?"
                  onConfirm={() => confirm(value._id)}
                  onCancel={cancel}
                  okText="Yes"
                  cancelText="No"
                >
                  <button className="w-full bg-red-500 text-center text-white rounded py-1">
                    Delete
                  </button>
                </Popconfirm>
              </div>
            </div>
          ))
        ) : (
          <>
            <h1>No data found</h1>
          </>
        )}
      </div>
    </div>
  );
};

export default Read;
