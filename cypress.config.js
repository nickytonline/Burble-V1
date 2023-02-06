const {defineConfig} = require("cypress");

module.exports = defineConfig({
	projectId: "y47h8y",
	e2e: {
		experimentalStudio: true,
		setupNodeEvents(on, config) {
			return require("./cypress/plugins/index.js")(on, config);
		},
		baseUrl: "http://localhost:2000/",
	},

	component: {
		devServer: {
			framework: "create-react-app",
			bundler: "webpack",
		},
	},
});
