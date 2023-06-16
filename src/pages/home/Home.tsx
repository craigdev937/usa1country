import React from "react";
import "./Home.css";
import { Search } from "../../components/search/Search";
import { Filter } from "../../components/filter/Filter";
import { Country } from "./Country";

export const Home = () => {
    return (
        <React.Fragment>
            <section className="home">
                <aside className="home__input">
                    <Filter />
                    <Search />     
                </aside>
                <Country />
            </section>
        </React.Fragment>
    );
};


