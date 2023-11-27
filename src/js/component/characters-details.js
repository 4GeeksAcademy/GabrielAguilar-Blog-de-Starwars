import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";

import "../../styles/demo.css";

export const CharactersDetails = () => {
    const { store, actions } = useContext(Context);
    const params = useParams()

    useEffect(() => {
        actions.getCharacter(params.id)

    }, []);

    console.log("Estoy en vista character");



    return (
        <>
            <div className="container pt-5">
                <div className="d-flex justify-content-center mx-auto w-75">
                    <div className="bg bg-secondary d-flex justify-content-evenly" style={{ width: "600px", height: "400px" }} >
                        <img className="" src={params.id === "1" ? params.type === "planets" ? "https://starwars-visualguide.com/assets/img/placeholder.jpg" : "https://starwars-visualguide.com/assets/img/" + params.type + "/" + params.id + ".jpg" : "https://starwars-visualguide.com/assets/img/" + params.type + "/" + params.id + ".jpg"} />
                    </div>
                    <div className="p-5">
                        <h1 className="text-center">{store.character?.properties?.name}</h1>
                        <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae nibh aliquam, mattis ligula eget, lobortis enim. Integer et nisi pharetra, fringilla libero sit amet, porttitor odio. Sed posuere tellus non viverra congue. Cras tempus tortor eu mi porta, quis facilisis nunc mollis. Cras diam enim, cursus in bibendum vel, blandit non sem. Cras a molestie enim. Sed finibus tempor nisl at tempus. Cras ultrices magna sed enim vestibulum suscipit.
                        </p>
                    </div>
                </div>
                <hr className="" style={{ border: "1px solid red" }} />
                <div className="container text-center text-danger w-75 p-4">
                    <div className="row ">
                        <div className="col-2 fw-semibold">
                            Name
                        </div>
                        <div className="col-2 fw-semibold">
                            Birth Year
                        </div>
                        <div className="col-2 fw-semibold">
                            Gender
                        </div>
                        <div className="col-2 fw-semibold">
                            Height
                        </div>
                        <div className="col-2 fw-semibold">
                            Skin Color
                        </div>
                        <div className="col-2 fw-semibold">
                            Eye Color
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-2">
                            {store.character?.properties?.name}
                        </div>
                        <div className="col-2">
                            {store.character?.properties?.birth_year}
                        </div>
                        <div className="col-2">
                            {store.character?.properties?.gender}
                        </div>
                        <div className="col-2">
                            {store.character?.properties?.height}
                        </div>
                        <div className="col-2">
                            {store.character?.properties?.skin_color}
                        </div>
                        <div className="col-2">
                            {store.character?.properties?.eye_color}
                        </div>
                    </div>
                </div>

            </div>

        </>

    );
};

CharactersDetails.propTypes = {
    name: PropTypes.string,
    gender: PropTypes.string,
    hair_color: PropTypes.string,
    eye_color: PropTypes.string,
    height: PropTypes.string,
    skin_color: PropTypes.string,
    id: PropTypes.string,
    route: PropTypes.string
};