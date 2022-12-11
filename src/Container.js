import React, { useEffect, useState, useMemo } from "react";

const Container = () => {
  const [count, setCount] = useState(0);
  const [data, setData] = useState();
  console.log("App rendered with count", count);
  const handleIncrementButton = () => {
    setCount(count + 1);
  };

  const fetchData = () => {
    // Imagine here an API call which returns a random number
    return Math.random();
  };
  const runHeavyCalc = (data) => {
    if (!data) return;
    console.log("Computing heavy func with data", data);
    // Math.floor is not heavy, use your imagination again
    return Math.floor(data * 100);
  };
  useEffect(() => {
    const data = fetchData();
    setData(data);
  }, []);
  //   const result = runHeavyCalc(data);
  const result = useMemo(() => runHeavyCalc(data), [data]);

  return (
    <div
      style={{
        width: "450px",
        height: "350px",
        border: "1px solid white",
        marginTop: "10px",
        textAlign: "center",
      }}
    >
      <h1>Hello Coders👩‍💻!</h1>
      <p style={{ color: "white" }}>Counter: {count}</p>
      <p style={{ color: "blue" }}>Result is {result}</p>
      <button
        onClick={handleIncrementButton}
        style={{
          background: "red",
          padding: "10px 15px",
          color: "white",
          border: "none",
        }}
      >
        Increment Count
      </button>
    </div>
  );
};

export default Container;
