import { useState, useEffect, createContext } from "react";
import "./App.css";

//Componets
import CocktailList from "./components/CocktailList";
import Drink from "./components/Drink";
import Search from "./components/Search";

//utils
import { GET } from "./utils/https";

//Context
export const IdDrink = createContext();

function App() {
	const [info, setInfo] = useState(false);
	const [id, setId] = useState(15300);
	const [inputValue, setInputValue] = useState("");

	return (
		<IdDrink.Provider value={{ id, setId, setInfo }}>
			<div className="App">
				{info ? (
					//Componete Drink info===true
					<Drink />
				) : (
					//App if info===false
					<>
						<h1 className="App__title">Cocktails App</h1>
						<Search inputValue={inputValue} setInputValue={setInputValue} />
						{inputValue ? (
							//inputvalue===true
							<CocktailList
								path={"search.php"}
								query={"s"}
								value={inputValue}
							/>
						) : (
							//inputvalue===false
							<>
								<CocktailList
									path={"filter.php"}
									query={"c"}
									value={"Ordinary_drink"}
								/>
								<CocktailList
									path={"filter.php"}
									query={"c"}
									value={"Cocktail"}
								/>
							</>
						)}
					</>
				)}
			</div>
		</IdDrink.Provider>
	);
}

export default App;
