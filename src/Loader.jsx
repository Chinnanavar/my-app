import React from 'react';
import PuffLoader from "react-spinners/PuffLoader";
import './Loader.scss'
const Loader = () => {
    return (
        <div className="loading">
            <PuffLoader
                color={"blue"}
                loading={"true"}

                // size={20}
                aria-label="Loading Spinner"
                data-testid="loader"
            />
        </div>
    )
}
export default Loader; 