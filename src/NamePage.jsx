import React from "react";
import { useParams } from "react-router-dom";

const nameColors = {
  Airport: "#ffadad",
  Sama: "#ffd6a5",
  Karelibaug: "#fdffb6",
  Abhilsha: "#caffbf",
};

const nameCol = {
  Airport: "#caffbf",
  Sama: "#fdffb6",
  Karelibaug: "#ffd6a5",
  Abhilsha: "#ffadad",
};
const NamePage = () => {
  const { name } = useParams();
  

  const backgroundColor = nameColors[name] || "#ffffff"; 
  const Color = nameCol[name] || "#ffffff"; 

  return (
    <div >
      <h1 style={{ backgroundColor, color: Color, margin: "0", padding: "0" , textAlign: "center"}}>Welcome to {name}</h1>
      <a href="/" style={{ textDecoration: "none", color: "blue" }}>
        Back to Home
      </a>
    </div>
  );
};

export default NamePage;
