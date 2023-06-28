import { useContext } from "react";
import { IdDrink } from "../../App";
import "./index.css";

const Drink = ({ drinks }) => {
	const { setInfo } = useContext(IdDrink);

	const handleCloseInfo = () => setInfo(false);
	return (
		<div className="Drink">
			<div className="Drink__card">
				<div className="Drink__card--borderTop"></div>
				<div className="Drink__card--wrapImg">
					<img
						src={drinks[0].strDrinkThumb}
						alt={drinks[0].strDrink}
						className="Drink__card--wrapImg--img"
					/>
				</div>
				<div className="Drink__card--infoWrap">
					<span className="Drink__spanTitle">
						<p className="Drink__spanTitle--p">{drinks[0].strDrink}</p>
					</span>
					<ul className="Drink__card--infoWrap--ul">
						{drinks[0].strIngredient1 && (
							<li>
								{drinks[0].strMeasure1} {"--"} {drinks[0].strIngredient1}
							</li>
						)}

						{drinks[0].strIngredient2 && (
							<li>
								{drinks[0].strMeasure2} {"--"} {drinks[0].strIngredient2}
							</li>
						)}

						{drinks[0].strIngredient3 && (
							<li>
								{drinks[0].strMeasure3} {"--"} {drinks[0].strIngredient3}
							</li>
						)}

						{drinks[0].strIngredient4 && (
							<li>
								{drinks[0].strMeasure4} {"--"} {drinks[0].strIngredient4}
							</li>
						)}

						{drinks[0].strIngredient5 && (
							<li>
								{drinks[0].strMeasure5} {"--"} {drinks[0].strIngredient5}
							</li>
						)}
					</ul>
					<p className="Drink__card--infoWrap--instruction">
						{drinks[0].strInstructionsIT}
					</p>
				</div>
				<button className="Drink__button" onClick={handleCloseInfo}>
					Close
				</button>
			</div>
		</div>
	);
};

export default Drink;
