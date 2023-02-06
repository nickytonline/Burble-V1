describe("Navtest successfully", () => {
	it("Reviews 4 nav links", () => {
		cy.visit("http://localhost:2000/");
		cy.contains("Trending Movies").should("be.visible");
		cy.get(".header__nav > :nth-child(2) > a").click();
		cy.contains("h2", "Movies");
		cy.get(".header__nav > :nth-child(3) > a").click();
		cy.contains("h2", "TV Series");
		cy.get(".header__nav > :nth-child(1) > a").click();
		cy.contains("Trending Movies").should("be.visible");
	});
});

// //TODO: Review
// Describe("Home page Hero", ()=> {
//     It.only('Reviews the home page', ()=>{
//         cy.intercept("https://api.themoviedb.org/3/movie/popular?api_key=d5199020aac77d6859c71466db7228e1&page=1", {fixture: 'movies.json'})
//         Cy.visit('/');
//         Cy.contains("h2","Goose: The Way of Water");
//         Cy.contains("Set more than a decade after the events of the first film, learn the story of the Sully family (Jake, Neytiri, and their kids), the trouble that follows them, the lengths they go to keep each other safe, the battles they fight to stay alive, and the tragedies they endure.")
//     })
// })
