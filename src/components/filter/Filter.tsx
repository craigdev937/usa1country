import React from "react";
import "./Filter.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { Actions } from "../../global/CountrySlice";
import { useAppDispatch } from "../../global/Hooks";

export const Filter = () => {
    const dispatch = useAppDispatch();
    const [filter, setFilter] = React.useState("");
    const [showMenu, setShowMenu] = React.useState(false);
    const regions: string[] = ["Africa", "Americas", "Asia", 
        "Europe", "Oceania"];

    const handleMenu = () => {
        setShowMenu(!showMenu);
    };

    React.useEffect(() => {
        if (filter !== "") {
            dispatch(
                Actions.setRegion(
                    filter.toLowerCase())
            );
        }
        return () => {
            dispatch(Actions.reset());
        }
    }, [dispatch, filter]);

    return (
        <React.Fragment>
            <section className="filter">
                <aside 
                    className="filter__aside" 
                    onClick={handleMenu}
                >
                    <input 
                        readOnly
                        type="text" 
                        value={filter}
                        className="filter__input" 
                        placeholder="Filter by Region"
                    />
                    <FontAwesomeIcon className="filter__icon" icon={faAngleDown} />
                </aside>
                {showMenu ? (
                    <aside className="dropdown">
                        {regions.map((item, index) => {
                            return (
                                <section 
                                    key={index}
                                    className="dropdown__item"
                                    onClick={() => {
                                        setFilter(item);
                                        handleMenu();
                                    }}
                                >
                                    {item}
                                </section>
                            );
                        })}
                    </aside>
                ) : null}
            </section>
        </React.Fragment>
    );
};


