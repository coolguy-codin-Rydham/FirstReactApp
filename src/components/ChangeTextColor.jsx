import { useState } from "react";


const ChangeTextColor = () => {
    const [textColor,setTextColor] = useState("black");
  return (
    <div className="px-2 py-10 my-2 border-2 border-green-400 border-dashed">
      <h1 style={{ color: textColor }} className="text-4xl text-center">
        Hello World
      </h1>
      <button
        onClick={() => {
          setTextColor(textColor === "black" ? "Red" : "black");
        }}
        className="px-4 py-3 m-16 border-2 border-green-500 border-solid"
      >
        Change Color
      </button>
    </div>
  );
};

export default ChangeTextColor;
