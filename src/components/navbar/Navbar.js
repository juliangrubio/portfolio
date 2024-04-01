import React from "react";
import "./Navbar.css";

const Navbar = ({ isScrolling }) => {
    const toTheTop = () => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    };

    return (
        <nav className={`navbar ${isScrolling > 200 ? "scrolling" : "fixie"}`}>
            <div className="navbar-container" onClick={toTheTop}>
                <div className="navbar-logo">
                {/* <div className={`navbar-logo ${isScrolling > 200 ? "scrolling" : "fixie"}`}> */}
                    Inicio
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
