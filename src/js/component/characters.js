import React, { useEffect, useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Card } from "./card";
import { Context } from "../store/appContext"

export const Characters = () => {

    const { store, actions } = useContext(Context);

    const charactersMap = store.characters;

    return (
        <div className="m-5 overflow-x-auto">
            <h2 className="text-danger mb-4 d-flex justify-content-start mt-5 pt-4">
                Characters
            </h2>
            <div className="d-flex ">
                {charactersMap.map(item => (
                    <Card
                        type={"characters"}
                        id={item.uid}
                        key={item.uid}
                        name={item.name}
                        route={`/characters/${item.uid}`}
                    />
                ))}
            </div>


        </div>
    );
};