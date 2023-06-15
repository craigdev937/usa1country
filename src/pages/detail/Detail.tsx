import React from "react";
import "./Detail.css";
import { Link, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Actions } from "../../global/CountrySlice";
import { API } from "../../global/FetchAPI";
import { useAppSelector, useAppDispatch } from "../../global/Hooks";

export const Detail = () => {
    const { code } = useParams();
    const codeID = code !== undefined ? String(code) : "";
    const dispatch = useAppDispatch();

    const { error, info } = useAppSelector((state) => state.country);

    React.useEffect(() => {
        if (code) {
            dispatch(API.code(codeID.toLowerCase()));
        }
        if (error) {
            console.log(error)
        }
        return () => {
            dispatch(Actions.reset());
        }
    }, [dispatch, code, error]);

    return (
        <React.Fragment>
            <section className="detail">
                <Link 
                    to="/" 
                    className="back__button"
                >
                    <FontAwesomeIcon icon={faArrowLeft} />
                </Link>
                <div className="detail__content">
                    {info.length > 0 ? (
                        <React.Fragment>
                            <img 
                                className="detail__image"
                                alt={info[0].flags.alt} 
                                src={info[0].flags.png} 
                            />
                            <div className="country-detail-right">
                                <h1>{info[0].name.common}</h1>
                                <div className="details">
                                    <aside className="detail__left">
                                        <p>
                                            Official Name:{" "}
                                            <span>
                                                {info[0].name.official}
                                            </span>
                                        </p>
                                        <p>
                                            Population: 
                                            <span>
                                                {info[0].population}
                                            </span>
                                        </p>
                                        <p>
                                            Region: <span>{info[0].region}</span>
                                        </p>
                                        <p>
                                            Sub Region: <span>{info[0].subregion}</span>
                                        </p>
                                        <p>
                                            Capital: <span>{info[0].capital}</span>
                                        </p>
                                    </aside>
                                    <aside className="detail__right">
                                        <p>
                                            Top Level Domain: <span>{info[0].tld}</span>
                                        </p>
                                        <p>
                                            Currencies:
                                            <span>
                                                {Object.values(info[0].currencies)
                                                    .map((item) => {
                                                    return item.name
                                                    }).join(",")
                                                }
                                            </span>
                                        </p>
                                        <p>
                                            Languages:
                                            <span>
                                                {Object.values(info[0].languages)
                                                    .map((item) => {
                                                        return item
                                                    }).join(",")
                                                }
                                            </span>
                                        </p>
                                    </aside>
                                </div>
                            </div>
                            <div className="border">
                                <p>Border Countries:</p>
                                {info[0].borders ? (
                                    info[0].borders.map((item, index) => {
                                        return (
                                            <Link 
                                                key={index} 
                                                to={`/${item}`} 
                                                className="border__name"
                                            >
                                                <p>{item}</p>
                                            </Link>
                                        )
                                    })
                                ) : (
                                    <span>No Borders</span>
                                )}
                            </div>
                        </React.Fragment>
                    ) : (
                        <span>No details found</span>
                    )}
                </div>
            </section>
        </React.Fragment>
    );
};


