const http = require("https");

const options = {
	"method": "GET",
	"hostname": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
	"port": null,
	"path": "/recipes/search?query=pizza",
	"headers": {
		"x-rapidapi-key": "3fd61761114f51614b810e268e7d3794cfb4fe33",
		"x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
		"useQueryString": true
	}
};

const req = http.request(options, function (res) {
	const chunks = [];

	res.on("data", function (chunk) {
		chunks.push(chunk);
	});

	res.on("end", function () {
		const body = Buffer.concat(chunks);
		console.log(body.toString());
	});
});

req.end();