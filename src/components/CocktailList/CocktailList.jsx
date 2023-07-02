import "./index.css";
import { useEffect, useState } from "react";

//utils
import { GET } from "../../utils/https.js";

//Components
import DrinkCard from "../DrinkCard";

const CocktailList = ({ path, query, inputValue, check }) => {
	const [cocktails, setCocktails] = useState([]);

	useEffect(() => {
		inputValue &&
			GET(`${path}`, `${query}`, `${inputValue}`).then(({ drinks }) => {
				setCocktails(drinks);
			});
	}, [inputValue]);

	return (
		<div className="CocktailList">
			<h1>{name}</h1>
			<div className="CocktailList__list">
				{check
					? cocktails
							.filter((drink) => drink.strAlcoholic !== "Alcoholic")
							?.map((cocktail) => (
								<DrinkCard key={cocktail.idDrink} cocktail={cocktail} />
							))
					: cocktails?.map((cocktail) => (
							<DrinkCard key={cocktail.idDrink} cocktail={cocktail} />
					  ))}
			</div>
		</div>
	);
};

export default CocktailList;
