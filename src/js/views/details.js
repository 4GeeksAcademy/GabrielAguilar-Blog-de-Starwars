import React, { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import "../../styles/home.css";
import { CharactersDetails } from "../component/characters-details.js";
import { PlanetsDetails } from "../component/planets-details.js";
import { VehiclesDetails} from "../component/vehicles-details.js";
import { Context } from "../store/appContext"

export const Details = () => {

	const params = useParams();

	let componentType; 

	if (params.type === "planets"){
		componentType = <PlanetsDetails />
	} else if(params.type === "vehicles"){
		componentType = <VehiclesDetails />
	} else {
		componentType = <CharactersDetails />
	};

	return (
		<div className="mt-5">
			{componentType}
		</div>
	);

	};