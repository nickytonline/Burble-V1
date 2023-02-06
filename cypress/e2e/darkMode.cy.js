import React from "react";
import ToggleBtn from "../../src/components/toggle/ToggleBtn";

describe("Dark mode toggle", () => {
	beforeEach(() => {
		cy.visit("/");
	});
	it("toggles the dark mode and calls the onClick prop", () => {
		const spy = cy.spy();
		cy.get(".theme--dark").should("not.exist");
		cy.get(<ToggleBtn label="Dark mode" onClick={spy} toggled={false} />);
		cy.get(".theme--dark").should("not.exist");
		cy.get("select").select("dark");
		cy.get(".theme--dark").should("exist");
		cy.get("select").select("light");
		cy.get(".theme--dark").should("not.exist");
	});
});
