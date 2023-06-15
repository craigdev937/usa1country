import React from "react";
import "./Country.css";
import { Link } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../../global/Hooks";
import { API } from "../../global/FetchAPI";

export const Country = () => {
    const dispatch = useAppDispatch();
    const { error, loading, region, searchTerm, countries 
    } = useAppSelector((state) => state.country);

    React.useEffect(() => {
        dispatch(API.all());
        if (error) {
            console.log(error);
        }
        if (region) {
            dispatch(API.region(region));
        }
    }, [error, region, dispatch]);

    const data = countries.filter((item) => item
        .name.common.toLowerCase()
        .includes(searchTerm));

    return (
        <React.Fragment>
            <section className="country">
                {loading ? (
                    <h1>Loading...</h1>
                ) : (
                    data.map((item, index) => {
                        return (
                            <Link 
                                className="country__card"
                                key={index}
                                to={`/${item.cioc}`}
                            >
                                <img
                                    className="country__image" 
                                    src={item.flags.png} 
                                    alt={item.flags.alt} 
                                />
                                <aside className="country-content">
                                    <h3>{item.name.common}</h3>
                                    <p>
                                        Popularion: <span>{item.population}</span>
                                    </p>
                                    <p>
                                        Region: <span>{item.region}</span>
                                    </p>
                                    <p>
                                        Capital: <span>{item.capital}</span>
                                    </p>
                                </aside>
                            </Link>
                        )
                    })
                )}
            </section>
        </React.Fragment>
    );
};


