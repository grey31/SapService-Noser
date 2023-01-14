const express = require("express");
const router = express.Router();

function postSL(oData, path, code = "", operation = "") {
	var url = "";
	if (operation === "") {
		url = `http://52.74.50.152:50000/b1s/v1/${path}`;
	} else {
		url = `http://52.74.50.152:50000/b1s/v1/${path}(${code})/${operation}`;
		oData = {};
	}

	try {
		console.log(`POST ${url} ::::::`, JSON.stringify(oData) || {});
	} catch (error) {}

	// var busyDialog = new sap.m.BusyDialog();
	// busyDialog.open();
	return new Promise(function(resolve, reject) {
		$.ajax({
			url: url,
			type: "POST",
			data: JSON.stringify(oData),
			crossDomain: true,
			xhrFields: {
				withCredentials: true
			},
			headers: { prefer: "return-no-content" },
			async: false,
			context: this,
			error: function(xhr, status, error) {
				var message = xhr.responseJSON["error"].message.value;
				// busyDialog.close();
				console.log(message);
				resolve(message);
			},
			success: function(json) {
				// busyDialog.close();
				resolve(0);
			}
		}).done(function(results) {
			if (results) {
				console.log(results);
				//busyDialog.close();
			}
		});
	});
}
// function test(param) {
// 	console.log(param);
// 	//return 'grey';
// }

module.exports = {
	execDb: async (oData, path) => {
		let db = await postSL(oData, path);
	}
};
