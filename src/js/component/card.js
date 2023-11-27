import React, { useEffect, useContext, useState } from "react";
import { Link, Navigate, Route, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import "../../styles/card.css";


export const Card = props => {
    const { store, actions } = useContext(Context);
    // Opción con useNavigate()
    // const navigate = useNavigate()
    const [isFavorite, setIsFavorite] = useState(false);

    const toggleFavorite = () => {
      setIsFavorite(!isFavorite);
      if (!isFavorite) {
        actions.addFavorites(props.name);
      }
    };

    return (

        <div className="me-3 my-3 rounded">
            <div className="card " style={{ width: "18rem" }}>
                <img className="rounded-top" src={props.id === "1" ? props.type === "planets" ? "https://starwars-visualguide.com/assets/img/placeholder.jpg" : "https://starwars-visualguide.com/assets/img/"+ props.type + "/" + props.id + ".jpg" : "https://starwars-visualguide.com/assets/img/"+ props.type + "/" + props.id + ".jpg"} />
        
                <div className="card-body">
                    <h5 className="card-title">{props.name}</h5>
                    <div className="d-flex justify-content-between">
                        <Link className="btn btn-outline-primary"  to={props.route}>Learn more!
                        </Link>
                        {/* OPCIÓN del boton con useNavigate */}
                        <span className="btn btn-outline-warning" onClick={toggleFavorite} >
                        <i id="hover-black-heart" className={isFavorite ? "fas fa-heart" : "fas fa-heart"} style={{ color: isFavorite ? "black" : "#fdf51c" }}></i>
                        </span>
                    </div>
                </div>
            </div>
        </div>

    );
};


/**
 * Define the data-types for
 * your component's properties
 **/
Card.propTypes = {
    name: PropTypes.string,
    gender: PropTypes.string,
    hair_color: PropTypes.string,
    eye_color: PropTypes.string,
    id: PropTypes.string,
    route: PropTypes.string
};