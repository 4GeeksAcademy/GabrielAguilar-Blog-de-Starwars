import React, { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Card } from "./card";
import { Context } from "../store/appContext"

export const Planets = () => {
    const { store, actions } = useContext(Context);

    const planetsMap = store.planets;


    return (
        <div className="m-5  ">
            <h2 className="text-danger mb-4 d-flex justify-content-start">
                Planets
            </h2>
            <div className="d-flex overflow-x-auto">{planetsMap.map(item => (
                <Card
                    type={"planets"}
                    id={item.uid}
                    key={item.uid}
                    name={item.name}
                    route={`/planets/${item.uid}`}
                />
            ))}
            </div>
        </div>


    );
};