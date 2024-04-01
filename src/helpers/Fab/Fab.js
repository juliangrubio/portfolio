import React from 'react';
import './Fab.css';

const Fab = ({ isScrolling }) => {

    const handleTakemeup = () => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    };


    return (
        <div
            className={`goup ${isScrolling > 200 ? "scrolling" : "fixie"}`}
            onClick={handleTakemeup}

        >
            {/* <button */}
            {/* className="goup" */}
            {/* onClick={handleTakemeup} */}
            {/* > */}
            <i className="fas fa-sort-up"></i>
            {/* </button> */}
        </div>
    )
}

export default Fab;
