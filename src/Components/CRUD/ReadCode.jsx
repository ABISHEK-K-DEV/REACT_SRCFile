import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ReadCode = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      await axios
        .get("http://localhost:7000/users")
        .then((res) => setData(res.data.data))
        .catch((err) => console.log(err));
    };
    getData();
  }, []);

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:7000/users/${id}`)
      .then((res) => {
        let filteredData = data.filter((val) => val._id !== id);
        console.log(filteredData);
        setData(filteredData);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <Link to={`/addform`}>Add form</Link>
      {data.map((val, index) => (
        <div key={val._id}>
          <p>{val.userName}</p>
          <p>{val.emailId}</p>
          <p>{val.number}</p>

          <div>
            <Link to={`/editform/${val._id}`}>
              <button>Edit</button>
            </Link>

            <button onClick={() => handleDelete(val._id)}>Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ReadCode;
