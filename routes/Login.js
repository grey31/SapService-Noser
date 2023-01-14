const request = require("request");
const express = require("express");
const router = express.Router();
const proxy = require("../lib/Proxy")();

// const cookieParser = require('cookie-parser');

const app = express();
// app.use(express.cookieParser());

router.get("/", (req, res) => {
	//console.log(req.body);
	let apkey = "";
	let url = "https://172.31.13.123:50000/b1s/v1/Login";
	//let body = { CompanyDB: "KSTI_APPTECH", UserName: req.body.UserName, Password: req.body.Password };

	// let url = 'http://172.31.13.123:50000/b1s/v1/Login';
	let body = {
		CompanyDB: "ZTESTNSMMI",
		UserName: "NS0023",
		Password: "p@ssw0rd"
	};

	//let body = { CompanyDB: "KSTI_APPTECH", UserName: "APPTECH01", Password: "1234" };
	let postheaders = { "Content-Type": "application/json" };
	let option = { url: url, method: "Post", json: body, postheaders: postheaders, strictSSL: false };

	request.post(option, (err, response, body) => {
		if (err) {
			console.log(err);
		} else {
			apkey = response.body;
		}
		//console.log(apkey);
		res.send(apkey);
		//req.headers(apkey);
		//res.sendStatus(200);
	});
});

router.get("/", async (req, res) => {
	res.json(apkey);
});
module.exports = router;
