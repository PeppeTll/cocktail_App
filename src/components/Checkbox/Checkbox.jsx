import "./Checkbox.css";

const Checkbox = ({ check, setCheck }) => {
	const onHandleCheck = () => {
		setCheck((prev) => !prev);
		console.log(check);
	};

	return (
		<div className="Checkbox" onClick={onHandleCheck}>
			<label className="cyberpunk-checkbox-label">
				<input className="cyberpunk-checkbox" type="checkbox" />
				alcohol free
			</label>
		</div>
	);
};

export default Checkbox;
