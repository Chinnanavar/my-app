import React, { useContext, useState } from 'react'
import MyContext from './MyContext';
const Btncolor = () => {
    const [color, setColor] = useState("red");

    const{open} =useContext(MyContext)

    return (
        <div style={{ backgroundColor: `${color}` }}>
           { open &&<h1>My favorite color is {color}!</h1>}
            <button
                type="button"
                onClick={() => setColor("blue")}
            >Blue</button>
            <button
                type="button"
                onClick={() => setColor("red")}
            >Red</button>
            <button
                type="button"
                onClick={() => setColor("pink")}
            >Pink</button>
            <button
                type="button"
                onClick={() => setColor("green")}
            >Green</button>
        </div>
    );
}
export default Btncolor