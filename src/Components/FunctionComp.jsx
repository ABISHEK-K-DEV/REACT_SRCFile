export const ButtonFun = ({ props }) => {
  // console.log(props, "props");

  const { data, HandleClick } = props;

  return (
    <button
      className={` ${
        data === "Decrement"
          ? "bg-red-500 px-5 py-2 rounded text-white"
          : "bg-blue-500 px-5 py-2 rounded text-white "
      } `}
      onClick={HandleClick}
    >
      {data}
    </button>
  );
};

const TestComp = () => {
  let data = "Submit";

  let HandleClick = () => {
    console.log("Function Trigger from TestComp");
  };

  return (
    <div className="w-full flex justify-center">
      <ButtonFun props={{ data, HandleClick }} />
    </div>
  );
};

export default TestComp;

export const TestComp3 = () => {
  let data3 = "Update";

  let HandleClick = () => {
    console.log("Function Trigger from TestComp3");
  };

  return (
    <div className="w-full flex justify-center">
      <ButtonFun props={{ data: data3, HandleClick }} />
    </div>
  );
};
