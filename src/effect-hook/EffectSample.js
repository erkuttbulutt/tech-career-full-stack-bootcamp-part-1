import React, { useEffect, useState } from "react";

function EffectSample() {
  const [counter, setcounter] = useState(0);
  const [counter2, setcounter2] = useState(0);
  
  //* bu component state değiştiğinde çalışır
  //* parent component state değiştiğinde çalışır
  console.log("Effect Sample Rendered");

  //* useEffect bloğu sadece bir kere çalışır(default hali)
  useEffect(() => {
    console.log("Use Effect Çalıştı");
  }, []);

  //* bu kod bloğu sadece counter2 state değiştiğinde çalışır
  useEffect(() => {
    console.log("Use Effect-2 Çalıştı");
  }, [counter2]);

  
  return (
    <>
      <div>
        <h1>Counter: {counter}</h1>
        <button onClick={() => setcounter(counter + 1)}>Increase</button>
      </div>
      <div>
        <h1>Counter: {counter2}</h1>
        <button onClick={() => setcounter2(counter2 + 1)}>Increase-2</button>
      </div>
    </>
  );
}

export default EffectSample;
