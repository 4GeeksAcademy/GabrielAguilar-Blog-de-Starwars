import React, { useEffect, useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Card } from "./card";
import { Context } from "../store/appContext"


export const Vehicles = () => {

    const { store, actions } = useContext(Context);

    const vehiclesMap = store.vehicles;

    return (
        <div className="m-5 ">
            <h2 className="text-danger mb-4 d-flex justify-content-start">
                Vehicles
            </h2>
            <div className="d-flex overflow-x-auto">{vehiclesMap.map(item => (
                <Card
                    type={"vehicles"}
                    id={item.uid}
                    key={item.uid}
                    name={item.name}
                    route={`/vehicles/${item.uid}`}
                />
            ))}
            </div>
        </div>


    );
};