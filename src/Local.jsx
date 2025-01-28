import React, { useState, useEffect } from 'react';

const Local = () => {
    const [username, setUsername] = useState('');

    useEffect(() => {
        const storedUsername = localStorage.getItem('username');
        if (storedUsername) {
            setUsername(storedUsername);
        }
    }, []);

    const handleChange = (e) => {
        setUsername(e.target.value);
    };

    const handleSave = () => {
        localStorage.setItem('username', username);
    };

    return (
        <div>
            <input 
                type="text" 
                value={username} 
                onChange={handleChange} 
                placeholder="Enter username" 
            />
            <button onClick={handleSave}>Save Username</button>
            <p>Saved Username: {username}</p>
        </div>
    );
};

export default Local;