import React from "react";
import "./Home.css";
import { Country } from "./Country";

export const Home = () => {
    return (
        <React.Fragment>
            <section className="home">
                <aside className="home__input">
                    
                </aside>
                <Country />
            </section>
        </React.Fragment>
    );
};


