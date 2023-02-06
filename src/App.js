import React from "react";

import ThemeProvider from "./context/ThemeProvider";

import "swiper/swiper.min.css";
import "./assets/boxicons-2.0.7/css/boxicons.css";
import "./App.scss";

import {BrowserRouter, Route} from "react-router-dom";

import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";


import Routes from "./config/Routes";

function App() {
	return (
		<ThemeProvider>
			<BrowserRouter>
				<Route
					render={(props) => (
						<>
							<Header {...props} />

							<Routes />

							<Footer />
						</>
					)}
				/>
			</BrowserRouter>
		</ThemeProvider>
	);
}

export default App;
