import { useContext } from "react";
import { IdDrink } from "../../App";
import "./index.css";

const DrinkCard = ({ cocktail }) => {
	const { id, setId, setInfo } = useContext(IdDrink);

	const handleClickID = () => {
		setId(cocktail.idDrink);
		setInfo(true);
	};

	return (
		<div className="DrinkCard">
			<div className="DrinkCard__card">
				<div className="DrinkCard__card--borderTop"></div>
				<div className="DrinkCard__card--wrapImg">
					<img
						src={cocktail.strDrinkThumb}
						alt={cocktail.strDrink}
						className="DrinkCard__card--wrapImg--img"
					/>
				</div>
				<span className="DrinkCard__spanTitle">
					<p className="DrinkCard__spanTitle--p">{cocktail.strDrink}</p>
				</span>
				<button className="DrinkCard__button" onClick={handleClickID}>
					info
				</button>
			</div>
		</div>
	);
};

export default DrinkCard;
