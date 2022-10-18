import React, { useEffect, useState } from "react";

function ManyRenders() {
  const [webuser, setwebuser] = useState({});

  let webuserDetail = {
    name: "Erkut",
    surname: "Bulut",
  };

  //* burada loop'a giriyor. Bunun için bir kere çalışması için useEffect kullanıyoruz
  //setwebuser(webuserDetail);

  useEffect(() => {
    setwebuser(webuserDetail);
  }, []);

  return (
    <div>
      <h1>{webuser.name}</h1>
      <h1>{webuser.surname}</h1>
    </div>
  );
}

export default ManyRenders;
