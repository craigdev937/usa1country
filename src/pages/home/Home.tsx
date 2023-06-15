import React from "react";
import "./Home.css";
import { Country } from "./Country";

export const Home = () => {
    return (
        <React.Fragment>
            <section className="home-page-container">
                <aside className="input-container">
                    
                </aside>
                <Country />
            </section>
        </React.Fragment>
    );
};


