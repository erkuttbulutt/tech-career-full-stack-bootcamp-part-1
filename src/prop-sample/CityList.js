import React from "react";

function CityList(props) {
  //* props almanın ikinci yolu
  const {cities} = props;

  return (
    <div>
      <ul>
        {cities &&
          cities.map((item, key) => {
            return <li key={key}>{item}</li>;
          })}
      </ul>
    </div>
  );
}

export default CityList;
