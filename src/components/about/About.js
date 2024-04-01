import React from "react";
import "./About.css";
import perfil from '../../assets/perfil.png';

const About = () => {
    return (
        <div className="about-container">
            <div className="about-desc">
                <h3>¿Puedo contarte algo sobre mi?</h3>
                <p>
                    Soy un apasionado por la tecnología y la electrónica,
                    pero fundamentalmente por la programación. Esto lo
                    descubrí desde niño. Hoy el entusiasmo no ha disminuido,
                    al contrario, cada dia me asombra y me gusta más.
                </p>
            </div>
            <div className="about-img">
                <img
                    src={perfil}
                    alt="about"
                />
            </div>
        </div>
    );
};

export default About;
