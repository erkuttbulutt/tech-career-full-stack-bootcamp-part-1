import React from "react";

//! jsx elementi için () syntax kullanılır. Jsx içersinde JS kodu için {} kullanılır.

function JsxSample() {
  let h1Element = <h1>Tech Career</h1>;
  let name = "Erkut Bulut";

  return (
    <>
      <p>{name.toUpperCase()}</p>
      {h1Element}
    </>
  );
}

export default JsxSample;
