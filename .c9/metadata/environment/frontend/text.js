{"filter":false,"title":"text.js","tooltip":"/frontend/text.js","undoManager":{"mark":4,"position":4,"stack":[[{"start":{"row":0,"column":0},"end":{"row":1,"column":0},"action":"insert","lines":["      return false;",""],"id":1}],[{"start":{"row":0,"column":0},"end":{"row":1,"column":0},"action":"remove","lines":["      return false;",""],"id":2}],[{"start":{"row":0,"column":0},"end":{"row":27,"column":10},"action":"insert","lines":["const http = require(\"https\");","","const options = {","\t\"method\": \"GET\",","\t\"hostname\": \"spoonacular-recipe-food-nutrition-v1.p.rapidapi.com\",","\t\"port\": null,","\t\"path\": \"/recipes/search?query=pizza\",","\t\"headers\": {","\t\t\"x-rapidapi-key\": \"2a93ec90afmsh79fb6387a7bcfd8p163a82jsnf8126f9742b1\",","\t\t\"x-rapidapi-host\": \"spoonacular-recipe-food-nutrition-v1.p.rapidapi.com\",","\t\t\"useQueryString\": true","\t}","};","","const req = http.request(options, function (res) {","\tconst chunks = [];","","\tres.on(\"data\", function (chunk) {","\t\tchunks.push(chunk);","\t});","","\tres.on(\"end\", function () {","\t\tconst body = Buffer.concat(chunks);","\t\tconsole.log(body.toString());","\t});","});","","req.end();"],"id":3}],[{"start":{"row":8,"column":21},"end":{"row":8,"column":71},"action":"remove","lines":["2a93ec90afmsh79fb6387a7bcfd8p163a82jsnf8126f9742b1"],"id":4},{"start":{"row":8,"column":21},"end":{"row":10,"column":0},"action":"insert","lines":["3fd61761114f51614b810e268e7d3794cfb4fe33","",""]}],[{"start":{"row":9,"column":0},"end":{"row":10,"column":0},"action":"remove","lines":["",""],"id":5},{"start":{"row":8,"column":61},"end":{"row":9,"column":0},"action":"remove","lines":["",""]}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":8,"column":61},"end":{"row":8,"column":61},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1620423792333,"hash":"b0c75e694eec6be71fadad664b64c1a8c0ac3a82"}