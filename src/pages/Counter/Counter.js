import React from "react";

const Counter = () => {
    const [count, setCount] = React.useState(0);
  return (

    <>
      <div>Counter</div>
      <div style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}>
        <button onClick={()=>{setCount(count+1)}}>+</button>
        <input value={count}/>
        <button onClick={()=>{setCount(count-1)}}>-</button>
      </div>
    </>
  );
};

export default Counter;
