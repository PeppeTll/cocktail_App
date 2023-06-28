import "./index.css";
import { useEffect, useState } from "react";

//utils
import { GET } from "../../utils/https.js";

//Components
import DrinkCard from "../DrinkCard";

const CocktailList = ({ name }) => {
	const [cocktails, setCocktails] = useState([]);

	useEffect(() => {
		GET("filter.php", "c", `${name}`).then(({ drinks }) =>
			setCocktails(drinks)
		);
	}, []);

	return (
		<div className="CocktailList">
			<h1>{name}</h1>
			<div className="CocktailList__list">
				{cocktails.map((cocktail) => (
					<DrinkCard key={cocktail.idDrink} cocktail={cocktail} />
				))}
			</div>
		</div>
	);
};

export default CocktailList;
