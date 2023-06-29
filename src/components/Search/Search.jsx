import "./index.css";

const Search = ({ inputValue, setInputValue }) => {
	const onHandleInput = (e) => {
		setInputValue(e.target.value);
	};

	return (
		<div className="Search">
			<input
				className="Search__input"
				name="text"
				type="text"
				value={inputValue}
				onChange={onHandleInput}
			/>
			<label className="Search__label" htmlFor="input">
				Search Drink
			</label>
			<div className="Search__topline"></div>
			<div className="Search__underline"></div>
		</div>
	);
};

export default Search;
