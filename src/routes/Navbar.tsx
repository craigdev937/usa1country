import React from "react";
import "./Navbar.css";
import { Outlet } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

export const Navbar = () => {
    const [darkTheme, setDarkTheme] = React.useState(false);
    
    const handleTheme = () => {
        setDarkTheme(!darkTheme);
        let navCon = document.querySelector(".main__con");
        navCon?.classList.toggle("dark");
    };

    return (
        <React.Fragment>
            <header className="header">
                <h1>Where in the World?</h1>    
                {darkTheme ? (
                    <section 
                        className="theme__light hidden" 
                        onClick={handleTheme}
                    >
                        <FontAwesomeIcon icon={faSun} />   
                        <p>Dark Theme</p>
                    </section>
                ) : (
                    <section 
                        className="theme__dark" 
                        onClick={handleTheme}
                    >   
                        <FontAwesomeIcon icon={faMoon} />
                        <p>Light Theme</p>
                    </section>
                )}
            </header>
            <Outlet />
        </React.Fragment>
    );
};


