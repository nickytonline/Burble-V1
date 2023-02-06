import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

/*
 * Import './commands'
 *    Cypress.on('uncaught:exception', (err, runnable) => {
 *    // returning false here prevents Cypress from
 *  // failing the test
 *    return false
 *    })
 */

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById("root")
);
