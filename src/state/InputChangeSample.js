import React, { useState } from "react";

function InputChangeSample() {
  const [formData, setformData] = useState({
    name: "",
    surname: "",
    email: "",
  });

  const changeInput = (element) => {
    console.log(element);
    setformData({
      ...formData,
      [element.name]: element.value,
    });
  };
  return (
    <>
      <div>
        <label>Name: </label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={(e) => changeInput(e.target)}
        />
      </div>
      <div>
        <label>Surname: </label>
        <input
          type="text"
          name="surname"
          value={formData.surname}
          onChange={(e) => changeInput(e.target)}
        />
      </div>
      <div>
        <label>Email: </label>
        <input
          type="text"
          name="email"
          value={formData.email}
          onChange={(e) => changeInput(e.target)}
        />
      </div>
    </>
  );
}

export default InputChangeSample;
