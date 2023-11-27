const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			character: [],
			characters: [],
			planet: [],
			planets: [],
			vehicle: [],
			vehicles: [],
			favorites: [],
			favorite: []			
		},
		actions: {
			// 1. Obteniendo los personajes de la API
			getCharacters: () => {
				fetch("https://www.swapi.tech/api/people/", {
					method: "GET",
				})
					.then((response) => response.json())
					.then(data => {
						setStore({ ...getStore , characters: data.results});
						console.log(data.results);
					})// => guardo el json en un espacio de memoria
					.catch((error) => console.log(error))// => te aviso si algo sale mal
			},

			// 1.1 Obteniendo un personaje de la API
			getCharacter: (id) => {
				fetch("https://www.swapi.tech/api/people/" + id, {
					method: "GET",
				})
					.then((response) => response.json())
					.then(data => {
						setStore({ ...getStore , character: data.result});
						console.log(data.results);
					})// => guardo el json en un espacio de memoria
					.catch((error) => console.log(error))// => te aviso si algo sale mal
			},


			// 2. Obteniendo los planetas de la API
			getPlanets: () => {
				fetch("https://www.swapi.tech/api/planets/", {
					method: "GET",
				})
					.then((response) => response.json())
					.then(data => {
						setStore({ ...getStore , planets: data.results });
						console.log(data);
					})// => guardo el json en un espacio de memoria
					.catch((error) => console.log(error))// => te aviso si algo sale mal
			},
			// 2.1 Obteniendo un planeta de la API
			getPlanet: (id) => {
				fetch("https://www.swapi.tech/api/planets/" + id, {
					method: "GET",
				})
					.then((response) => response.json())
					.then(data => {
						setStore({ ...getStore , planet: data.result});
						console.log(data.results);
					})// => guardo el json en un espacio de memoria
					.catch((error) => console.log(error))// => te aviso si algo sale mal
			},


			// 3. Obteniendo los coches de la API
			getVehicles: () => {
				fetch("https://www.swapi.tech/api/vehicles/", {
					method: "GET",
				})
					.then((response) => response.json())
					.then(data => {
						setStore({ ...getStore , vehicles: data.results });
						console.log(data);
					})// => guardo el json en un espacio de memoria
					.catch((error) => console.log(error))// => te aviso si algo sale mal
			},

			// 3. Obteniendo un coche de la API
			getVehicle: (id) => {
				fetch("https://www.swapi.tech/api/vehicles/" + id , {
					method: "GET",
				})
					.then((response) => response.json())
					.then(data => {
						setStore({ ...getStore , vehicle: data.result });
						console.log(data);
					})// => guardo el json en un espacio de memoria
					.catch((error) => console.log(error))// => te aviso si algo sale mal
			},
			
			//3. Añadir a favortios
			addFavorites: (favorite) => {
				const favoritesState = getStore().favorites.concat(favorite);
				setStore({...getStore, favorites: favoritesState})
			},
			
			//4. Eliminar favorito
			deleteFavorite: (name) => {
				const store = getStore()
				const newFavorite = store.favorites.filter((item) => item !== name);
				console.log(newFavorite);
				console.log(name);

				setStore({favorites: newFavorite});
		
			}
		}
	};
};

export default getState;

//ROUTES
// "characters": "https://www.swapi.tech/api/people/", 
//"planets": "https://www.swapi.tech/api/planets/",
//"vehicles": "https://www.swapi.tech/api/vehicles/" 