const express = require("express");
const router = express.Router();
const proxy = require("../lib/Proxy")();

router.get("/", async (req, res) => {
	console.log(req);
	console.log(res.body);
	res.send(await proxy.get("Orders"));
});

module.exports = router;
