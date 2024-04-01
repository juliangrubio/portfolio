import React, { useState, useEffect } from "react";
import "./App.css";
import Cover from "./components/cover/Cover";
// import Navbar from "./components/navbar/Navbar";
import About from "./components/about/About";
import Slider from "./components/slider/Slider";
import Info from "./components/info/Info";
import Footer from "./components/footer/Footer";
import { InfoContext } from "./helpers/InfoContext";
import Fab from "./helpers/Fab/Fab";

function App() {
    const [scrollHeight, setScrollHeight] = useState(0);
    const [isOpen, setIsOpen] = useState(false);
    const [sobreOpen, setSobreOpen] = useState('');
    const [sobrePull, setSobrePull] = useState('');

    const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollHeight(position);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
    }, [scrollHeight]);

    return (
        <div className="App">
            {/* <Navbar isScrolling={scrollHeight} /> */}
            <Fab isScrolling={scrollHeight} />
            <Cover />
            <About />
            <Slider />
            <Info />

            <InfoContext.Provider value={{
                isOpen, setIsOpen,
                sobreOpen, setSobreOpen,
                sobrePull, setSobrePull
            }}>
                <Footer />
            </InfoContext.Provider>
        </div>
    );
}

export default App;
