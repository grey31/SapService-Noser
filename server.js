const emoji = require("node-emoji");

if (process.env.NODE_ENV !== "production") {
	require("dotenv").config();
}
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const ordersRouter = require("./routes/Orders");
//const loginRoutes = require("./routes/Login");
const draftsRoutes = require("./routes/Drafts");
const landedCostsRoutes = require("./routes/LandedCosts");
const goodReceiptRoutes = require("./routes/GRPO/GoodsReceiptPO");

app.use(
	bodyParser.json({
		limit: "50mb",
		parameterLimit: 1000000,
		extended: true
	})
);
var cors = require('cors');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse application/json
app.use(bodyParser.json())

app.use(cors());



// // use it before all route definitions
// app.use(cors({origin: 'http://localhost:8080'}));
// app.use(cors({origin: 'http://localhost:8081'}));
// app.use(cors({origin: 'http://localhost:8082'}));
// app.use(cors());


// // // Add headers before the routes are defined
// app.use(function (req, res, next) {

//     // Website you wish to allow to connect
//     res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');

//     // Request methods you wish to allow
//     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

//     // Request headers you wish to allow
//     res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

//     // Set to true if you need the website to include cookies in the requests sent
//     // to the API (e.g. in case you use sessions)
//     res.setHeader('Access-Control-Allow-Credentials', true);

//     // Pass to next layer of middleware
//     next();
// });

app.use("/GRPO", goodReceiptRoutes);
app.use("/LandedCost", landedCostsRoutes);

// app.get("/api/ping", (req, res) => {
// 	res.send(emoji.emojify("pong!!:8ball: :8ball: :8ball:"));
// });
//app.use("/Login", loginRoutes);
//app.use('/Drafts', draftsRoutes);

app.post('/Login', (req, res) => {
	res.send(`${process.env.SERVICELAYER}`);
});
app.listen(process.env.PORT, () => {
	console.log(`SERVICELAYER: ${process.env.SERVICELAYER}`);
	console.log(emoji.emojify(`:rocket::rocket::rocket: --> Listening at port: ${process.env.PORT}...`));
});
