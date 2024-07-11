import React, { useEffect, useMemo, useState } from "react";
import check from "../Assets/check-mark.png";
import { Link } from "react-router-dom";

const ListMap = ({ props }) => {
  const { state } = props;

  useEffect(() => {
    console.log("component did mount");
  }, []);

  console.log("outside render")

  const MemoizedData = useMemo(() => {
    
    return (
      <React.Fragment>
        {state?.length >= 1 ? (
          state?.map((value) => {
            // console.log(value);
            return (
              <div
                className="w-[250px] h-[200px] bg-red-100 flex flex-col gap-2 rounded justify-center items-center"
                key={value.id}
              >
                <img src={check} className="w-20 h-20" alt={value.id} />
                <h1>Name : {value.name}</h1>
                <h1>Email ID: {value.email}</h1>
                <h1>Age : {value.age}</h1>
                <Link to={`/state/${value.id}`}>Edit</Link>
              </div>
            );
          })
        ) : (
          <>
            <h1>No data</h1>
            <h2>available</h2>
          </>
        )}
      </React.Fragment>
    );
  }, [state]);

  return <>{MemoizedData}</>;
};

export default ListMap;
