import React from "react";

//* props almanın üçüncü yolu
function ChildComp({merhaba}) {
  return (
    <div>
      <button onClick={() => merhaba()}>Click Me!</button>
    </div>
  );
}

export default ChildComp;
