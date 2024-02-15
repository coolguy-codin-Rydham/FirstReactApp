import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const getColor = () =>{
    if(count>0) return "text-green-500"
    
    if(count<0) return "text-red-500"
    return "text-black"
  }
  return (
    <div className="px-2 py-10 border-2 border-green-400 border-dashed">
      <button
        className="px-3 py-2 mx-10 border-2 border-red-400 border-solid"
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increase
      </button>
      <button
        className="px-3 py-2 mx-10 border-2 border-red-400 border-solid"
        onClick={() => {
          setCount(count - 1);
        }}
      >
        Decrease
      </button>
      <button
        className="px-3 py-2 mx-10 border-2 border-red-400 border-solid"
        onClick={() => {
          setCount(0);
        }}
      >
        Reset
      </button>

      <h1 className={`font-bold text-center ${getColor()} text-8xl`}>{count}</h1>
    </div>
  );
};

export default Counter;
