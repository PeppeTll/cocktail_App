import { useState, useEffect, createContext } from "react";
import "./App.css";

//Componets
import CocktailList from "./components/CocktailList";
import Drink from "./components/Drink";
import Search from "./components/Search";

//utils
import { GET } from "./utils/https";
import Checkbox from "./components/Checkbox/Checkbox";

//Context
export const IdDrink = createContext();

function App() {
	const [info, setInfo] = useState(false);
	const [id, setId] = useState(15300);
	const [inputValue, setInputValue] = useState("");
	const [check, setCheck] = useState(false);

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
							<>
								<Checkbox check={check} setCheck={setCheck} />
								<CocktailList
									check={check}
									path={"search.php"}
									query={"s"}
									inputValue={inputValue}
								/>
							</>
						) : (
							//inputvalue===false
							<>
								<CocktailList
									check={check}
									path={"filter.php"}
									query={"c"}
									inputValue={"Ordinary_drink"}
								/>
								<CocktailList
									check={check}
									path={"filter.php"}
									query={"c"}
									inputValue={"Cocktail"}
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
