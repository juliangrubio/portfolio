import React from "react";
import "./Slider.css";
import proy1 from '../../assets/proyect1_.png'
import construccion from '../../assets/construccion.png'

const slidesInfo = [
    {
        src: proy1,
        href: 'https://climaa-app.herokuapp.com/',
        alt: "Clima-app",
        desc: "Clima-app",
    },
    {
        // src: "https://cdn.pixabay.com/photo/2017/10/31/19/05/web-design-2906159_960_720.jpg",
        src: construccion,
        href: '#',
        alt: "Proyecto 2",
        desc: "Proyecto 2",
    },
    {
        src: construccion,
        href: '#',
        alt: "Proyecto 3",
        desc: "Proyecto 3",
    },
];

const slides = slidesInfo.map((slide) => (
    <div className="slide-container">

        <a className="slide-images" href={(slide.href === '#') ? null : slide.href}>
            <img src={slide.src} alt={slide.alt} />
        </a>

        <div className="slide-desc">
            <span>{slide.desc}</span>
        </div>
    </div>
));


export default slides;
