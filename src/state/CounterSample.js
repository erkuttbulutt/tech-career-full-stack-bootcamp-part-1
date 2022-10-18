import React, { useState } from "react";

function CounterSample() {
  // counter değişkenin kendisi
  // setcounter bu değişkeni değiştirebilecek ve bu sayede ekranı güncelleyecek tek şey
  // 0 ise default değer
  // önceden class comp setState kullanırmış. Şimdi ise useState
  const [counter, setcounter] = useState(0);

  console.log("Counter rendered");

  const increase = () => {
    setcounter(counter + 1);
  };

  const decrease = () => {
    setcounter(counter - 1);
  };

  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={() => increase()}>Arttır</button>
      <button onClick={() => decrease()}>Azalt</button>
    </div>
  );
}

export default CounterSample;
