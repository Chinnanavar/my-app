import React, { useState } from 'react';

const ToggleLogin = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <h1>Toggle Login</h1>
      <button 
        type="button" 
        onClick={() => setIsLoggedIn(!isLoggedIn)}
        aria-pressed={isLoggedIn}
        style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer' }}
      >
        {isLoggedIn ? 'Logout' : 'Login'}
      </button>
      {isLoggedIn && <h2>Welcome</h2>}
    </div>
  );
};

export default ToggleLogin;
