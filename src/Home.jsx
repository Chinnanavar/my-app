import React, { useContext } from "react";
import { Link } from "react-router-dom";
import MyContext from "./MyContext";

const Data = [
  { name: "Airport" },
  { name: "Sama" },
  { name: "Karelibaug" },
  { name: "Abhilsha" },
];

const Home = () => {

  const{setOpen} =useContext(MyContext)
  return (
    <div>

      <h1 onClick={()=>setOpen(true)}>Select a City</h1>
      {Data.map((i, index) => (
        <div key={index} style={{ padding: "5px" }}>
          <Link to={`/name/${i.name}`} style={{ textDecoration: "none", color: "blue" }}>
            {i.name}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Home;
