import React, { useEffect, useState } from "react";

const UseEffect = () => {
  const [clicked, setClicked] = useState();
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("you are in use state");

    return () => {
      console.log("return to use state");
    };
  }, [count, clicked]);

  return (
    <div>
      <button onClick={() => setClicked("Subscribe")}>Subscribe</button>
      <br />
      <hr />
      <button onClick={() => setClicked("To")}>To</button>
      <br />
      <hr />
      <button onClick={() => setClicked("Yash")}>Yash</button>
      <h1>{clicked}</h1>
      <button onClick={() => setCount(count + 1)}>Count</button>
      <h2>You clicked {count} times</h2>
    </div>
  );
};

export default UseEffect;
