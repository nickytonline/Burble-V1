describe("", () => {
	it("Searches and plays a movie via load more", () => {
		cy.visit("http://localhost:2000/movie");
		cy.contains("Movies").should("be.visible");
		cy.contains("Load More").should("be.visible");
		cy.get("button").contains("Load More").click();
		cy.get("div.movie-grid>a:nth-child(21)").click();
		// Should contain title, genres, cast, trailer
		cy.get(
			".movie-content.container div.movie-content__info div.genres"
		).should("be.visible");
		cy.contains("Cast").should("be.visible");
		cy.contains("Trailer").should("be.visible");
	});
});

/*
 * "Browse and play"
 * User visits homepage
 * clicks Movies tab
 * clicks load more
 * pick a movie from the second set
 * click movie, verify everything works
 */
