import React, { useState } from "react";

const C = () => {
  const [selectedName, setSelectedName] = useState("");

  const Data = [
    { name: "a" },
    { name: "b" },
    { name: "c" },
    { name: "d" },
  ];

  const handleClick = (name) => {
    setSelectedName(name);
  };

  return (
    <div>
      {Data.map((i, index) => (
        <div key={index} onClick={() => handleClick(i.name)} style={{ cursor: "pointer", padding: "5px", borderBottom: "1px solid #ccc" }}>
          {i.name}
        </div>
      ))}

      {selectedName && <h1>You clicked: {selectedName}</h1>}
    </div>
  );
};

export default C;
