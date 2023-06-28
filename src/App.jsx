import { useState, useEffect, createContext } from "react";
import "./App.css";

//Componets
import CocktailList from "./components/CocktailList";
import Drink from "./components/Drink";

//utils
import { GET } from "./utils/https";

//Context
export const IdDrink = createContext();

function App() {
	const [info, setInfo] = useState(false);
	const [id, setId] = useState(15300);

	return (
		<IdDrink.Provider value={{ id, setId, setInfo }}>
			<div className="App">
				{info ? (
					<Drink />
				) : (
					<>
						<h1 className="App__title">Cocktails App</h1>
						<CocktailList name={"Ordinary_Drink"} />
						<CocktailList name={"Cocktail"} />
					</>
				)}
			</div>
		</IdDrink.Provider>
	);
}

export default App;
