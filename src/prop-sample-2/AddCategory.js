import React, { useState } from "react";

function AddCategory({add}) {
  const [name, setname] = useState("");
  const [description, setdescription] = useState("");
  return (
    <>
      <div>
        <div>
          <lable>Name: </lable>
          <input type="text" onChange={(e) => setname(e.target.value)} />
        </div>
        <div>
          <lable>Description: </lable>
          <input type="text" onChange={(e) => setdescription(e.target.value)} />
        </div>
        <div>
          <button onClick={() => add({ name: name, description: description })}>
            Add
          </button>
        </div>
      </div>
    </>
  );
}

export default AddCategory;
