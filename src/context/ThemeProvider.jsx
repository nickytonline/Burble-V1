import React, {useState, useEffect} from "react";
import ThemeContext, {initialThemeState} from "./ThemeContext";

const ThemeProvider = ({children}) => {
	const [theme, setTheme] = useState(initialThemeState.theme);

	const localStorage = window.localStorage;

	useEffect(() => {
		const saveThemeLocal = localStorage.getItem("globalTheme");

		if (!!saveThemeLocal) {
			setTheme(saveThemeLocal);
		}
	}, [localStorage]);

	useEffect(() => {
		localStorage.setItem("globalTheme", theme);
	});

	return (
		<ThemeContext.Provider value={{theme, setTheme}}>
			<div className={`theme--${theme}`}>{children}</div>
		</ThemeContext.Provider>
	);
};

export default ThemeProvider;
