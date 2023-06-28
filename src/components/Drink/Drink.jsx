import { useContext, useEffect, useState } from "react";
import { IdDrink } from "../../App";
import "./index.css";

//HTTPS
import { GET } from "./../../utils/https";

//Components
import Loader from "../Loader";

const Drink = () => {
	const { id, setInfo } = useContext(IdDrink);
	const [drink, setDrink] = useState("");
	const [loader, setLoader] = useState(false);

	const handleCloseInfo = () => setInfo(false);

	const handleViewInfo = (drinks) => {
		setDrink(drinks);
	};

	const handleTimeOut = () => {
		setTimeout(() => {
			setLoader(true);
		}, 1000);
	};

	useEffect(() => {
		GET("lookup.php", "i", `${id}`).then(({ drinks }) => {
			handleViewInfo(drinks);
			handleTimeOut();
		});
	}, []);

	return (
		<>
			{loader ? (
				<div className="Drink">
					<div className="Drink__card">
						<div className="Drink__card--borderTop"></div>
						<div className="Drink__card--wrapImg">
							<img
								src={drink[0].strDrinkThumb}
								alt={drink[0].strDrink}
								className="Drink__card--wrapImg--img"
							/>
						</div>
						<div className="Drink__card--infoWrap">
							<span className="Drink__spanTitle">
								<p className="Drink__spanTitle--p">{drink[0].strDrink}</p>
							</span>
							<ul className="Drink__card--infoWrap--ul">
								{drink[0].strIngredient1 && (
									<li>
										{drink[0].strMeasure1} {"--"} {drink[0].strIngredient1}
									</li>
								)}

								{drink[0].strIngredient2 && (
									<li>
										{drink[0].strMeasure2} {"--"} {drink[0].strIngredient2}
									</li>
								)}

								{drink[0].strIngredient3 && (
									<li>
										{drink[0].strMeasure3} {"--"} {drink[0].strIngredient3}
									</li>
								)}

								{drink[0].strIngredient4 && (
									<li>
										{drink[0].strMeasure4} {"--"} {drink[0].strIngredient4}
									</li>
								)}

								{drink[0].strIngredient5 && (
									<li>
										{drink[0].strMeasure5} {"--"} {drink[0].strIngredient5}
									</li>
								)}
							</ul>
							<p className="Drink__card--infoWrap--instruction">
								{drink[0].strInstructionsIT}
							</p>
						</div>
						<button className="Drink__button" onClick={handleCloseInfo}>
							Close
						</button>
					</div>
				</div>
			) : (
				<Loader />
			)}
		</>
	);
};

export default Drink;
