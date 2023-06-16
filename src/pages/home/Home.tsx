import React from "react";
import "./Home.css";
import { Search } from "../../components/search/Search";
import { Country } from "./Country";

export const Home = () => {
    return (
        <React.Fragment>
            <section className="home">
                <aside className="home__input">
                    <Search />     
                </aside>
                <Country />
            </section>
        </React.Fragment>
    );
};


