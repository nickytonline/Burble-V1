import React, {useState} from "react";

function ToggleBtn({label, toggled, onClick}) {
	const [isToggled, toggle] = useState(toggled),
		callback = () => {
			toggle(!isToggled);
			onClick(!isToggled);
		};

	return (
		<label>
			<input defaultChecked={isToggled} onClick={callback} type="checkbox" />

			<span />

			<strong>{label}</strong>
		</label>
	);
}
export default ToggleBtn;
