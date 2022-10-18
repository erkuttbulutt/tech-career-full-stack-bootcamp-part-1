import React, { useState } from "react";
import ChildCounter from "./ChildCounter";

function ParentCounter() {
  // statedeki counter verisini prop ile childCounter'a gönderdik
  const [counter, setcounter] = useState(0);
  const [number, setnumber] = useState(0)

  const getData = (number) => {
    setnumber(number);
  };
  return (
    <div>
      <div>
        <h1>Number: {number}</h1>
      </div>
      <div>
        <h1>Parent: {counter}</h1>
        <button onClick={() => setcounter(counter + 1)}>Increase</button>
      </div>
      <ChildCounter counter={counter} getData={getData} />
    </div>
  );
}

export default ParentCounter;
