import React from "react";
import "./Search.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { Actions } from "../../global/CountrySlice";
import { useAppSelector, useAppDispatch } from "../../global/Hooks";

export const Search = () => {
    const dispatch = useAppDispatch();
    const { searchTerm } = useAppSelector((state) => state.country);

    const handleChange = 
    (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(Actions
            .setSearchTerm(
                event.target.value.toLowerCase()
            )
        );
    };

    return (
        <React.Fragment>
            <section className="search">
                <aside className="search__icon">
                    <FontAwesomeIcon 
                        icon={faMagnifyingGlass} 
                    />
                </aside>
                <input 
                    type="text" 
                    className="search__input"
                    placeholder="Search for a country"
                    value={searchTerm}
                    onChange={handleChange}
                />
            </section>
        </React.Fragment>
    );
};


