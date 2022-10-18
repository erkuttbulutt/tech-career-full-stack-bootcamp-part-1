import React, { useState } from "react";

function ArraySample() {
  let metalBands = ["Pentagram", "Murder King", "Razor", "Dr Skull"];
  const [metals, setmetals] = useState(metalBands);

  const clearAll = () => {
    //* uzun yolu
    // const emptyArray = [];
    // setmetals(emptyArray);
    //* kısa yolu
    setmetals([]);
  };

  const removeBand = (item) => {
    let newBands = metals.filter((q) => q !== item);
    setmetals([...newBands])
  };

  return (
    <div>
      <ul>
        {metals.map((item, key) => {
          return (
            <li
              key={key}
              style={{ cursor: "pointer" }}
              onClick={() => removeBand(item)}
            >
              {item}
            </li>
          );
        })}
      </ul>
      <button onClick={() => clearAll()}>Clear</button>
    </div>
  );
}

export default ArraySample;
