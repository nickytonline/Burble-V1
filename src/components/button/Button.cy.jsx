import React from "react";
import Button from "./Button";

describe("<Button />", () => {
	it("renders", () => {
		cy.mount(<Button></Button>);
		cy.get("button").should("have.class", "btn");
	});
});
