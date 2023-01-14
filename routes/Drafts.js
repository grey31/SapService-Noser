//const request = require('request');
const express = require('express');
const router = express.Router();
const db = require('../appsettings');

const app = express();

router.post('/', (req, res) => {
	//console.log('Got body:', req.body);

	db.execDb(req.body, 'Drafts').then((result) => {
		console.log(result);
	});

	// var message = await AppUI5.postSL(req.body, 'Drafts');

	// var message = await AppUI5.patchSL(oData, 'Drafts', '46');
	//console.log(db.test(v1));
	res.sendStatus(200);
	//console.log(res);
	//res.send(await proxy.get('Drafts'));
});

module.exports = router;
