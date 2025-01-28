// App.jsx
import React from 'react';


import Typewriter from "typewriter-effect";
import './App3.scss';

function App3() {
    return (
        <div className="App">


            <Typewriter
                options={{
                    strings: ['Hello', 'World'],
                    autoStart: true,
                    loop: true,
                }}
            />
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3690.4643629692873!2d73.172746608397!3d22.33608854151717!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fc9e2c4382d89%3A0xc25c2a592f9acd4!2sV-Ex%20Tech%20-%20IT%20Training%2FInternship%20%26Placement!5e0!3m2!1sen!2sin!4v1708704539719!5m2!1sen!2sin" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
    );
}

export default App3;