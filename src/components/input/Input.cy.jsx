import React from "react";
import Input from "./Input";

describe("<Input />", () => {
	it("renders the input element", () => {
		cy.mount(<Input />);
		cy.get('[data-testid="input"]').should("exist");
	});
	it("displays the correct placeholder text", () => {
		const placeholderText = "Enter Keyword";
		cy.mount(<Input placeholder={placeholderText} />);
		cy.get("input").should("have.attr", "placeholder", placeholderText);
	});
	it("displays the correct input type", () => {
		const inputType = "text";
		cy.mount(<Input type={inputType} />);
		cy.get('[data-testid="input"]').should("have.attr", "type", inputType);
	});
	it("updates the value when text is entered", () => {
		const testValue = "John Doe";
		cy.mount(<Input />);
		cy.get('[data-testid="input"]')
			.type(testValue)
			.should("have.value", testValue);
	});
});
