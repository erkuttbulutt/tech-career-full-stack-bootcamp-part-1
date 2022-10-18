import React from "react";

function ChildCounter(props) {
  //* childComp'dan 100'ü parentComp'a yolladık
  return (
    <div>
      <h3>{props.counter}</h3>
      <button onClick={() => props.getData(100)}>
        Send Data to parent compenent
      </button>
    </div>
  );
}

export default ChildCounter;
