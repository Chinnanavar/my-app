import React from 'react';


const User = ({ name, age, email }) => {
  return (
    <div style={{ border: '1px solid black', padding: '10px', margin: '10px', width: '300px', height: '200px', backgroundColor: 'lightgray', boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)' }}>
      <h2 >Name: {name}</h2>
      <h2>Age: {age}</h2>
      <h2>Email: {email}</h2>
    </div>
  );
};

export default User;
