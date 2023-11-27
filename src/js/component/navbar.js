import React, { useEffect, useContext, useState, useSyncExternalStore } from "react";
import { Link } from "react-router-dom";
 import logoStarwars from "../../img/star-wars-yellow.png";
import { Context } from "../store/appContext"


export const Navbar = (props) => {

	const { store, actions } = useContext(Context);
	const favoritesMap = store.favorites;


	return (

		<nav className="navbar navbar-light bg-dark fixed-top mb-3 ">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">
					<img className="p-1 ms-5" style={{ height: "50px", }} src={logoStarwars} />
				</span>
			</Link>
			<div className="me-5">
				
					<div className="dropdown me-5">
						<button className="btn btn-warning dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
							Favorites
							<span className="btn btn-warningprimary text-ligth">{favoritesMap.length > 0 ? favoritesMap.length : " " }</span>
						</button>
						<ul className="dropdown-menu ">
							{favoritesMap.map((item, i) => (
								<li key={i} className="dropdown-item d-flex justify-content-between">
									{item}
									<span onClick={() => actions.deleteFavorite(item)}>
									<i className="fas fa-trash "></i>
									</span>
								</li>
							))}
						</ul>
					</div>
				
			</div>
		</nav>

	);
};