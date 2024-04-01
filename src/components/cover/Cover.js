import React from "react";
import "./Cover.css";
import "animate.css";
import data from '../../helpers/desc.json'
import ReactTypingEffect from "react-typing-effect";

const Cover = () => {


    return (
        // ORIGINAL
        <div className="cover-container">

            <div className="imgbg">
                <div className="grettings">
                    <h1 className="animate__animated animate__fadeIn animate__slower">Bienvenido.</h1>
                    <h2>Soy Julian,</h2>
                    {/* <h3> desarrollador web.</h3> */}
                    {/* <span>$ </span> */}
                    <h3>
                        <span style={{color: 'green'}}>$</span>
                        <ReactTypingEffect
                            cursorClassName="cursor"
                            text={["escritor de software", "solucionador de problemas", "desarrollador web"]}
                        />
                    </h3>
                </div>
                <div className="complement">
                    <pre>{JSON.stringify(data, null, 2)}</pre>
                </div>
                <div className="mobile">
                    {/* <img src={bgMobile} alt="mobile" /> */}
                </div>
            </div>

        </div>

    );
};

export default Cover;
