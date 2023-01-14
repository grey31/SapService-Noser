
const request = require("request");
const express = require("express");
const { parse } = require("dotenv");
const router = express.Router();
const app = express();


router.post('/Post', (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");


    request({
        url: "https://172.31.13.123:50000/b1s/v1/Login",
        method: "Post",
        strictSSL: false,
        postheaders: { "Content-Type": "application/json" }, 
        json: {
            CompanyDB: "Z2TESTNSMMI",
            UserName: "NS0023",
            Password: "p@ssw0rd"
        }
    }, (error, response, body) => {


        request({
            url: "https://172.31.13.123:50000/b1s/v1/LandedCosts",
            method: "Post",
            strictSSL: false,
            contentType: "application/json",
            datatype: "json",
            headers: {                
                'Content-Type': 'application/json',
                Cookie: 'B1SESSION='+ response.body.SessionId +';'
            },
            body: JSON.stringify(req.body)
        
        }, (err, responseLand, body) => {   

            res.setHeader("Access-Control-Allow-Origin", "*");
        
    
            if (err) {
                res.send(err);
                //res.send("grey");
       
                console.log(err);
            } else {
                //res.send("grey");
                res.send(responseLand.body);
                console.log(responseLand.body)
                //res.sendStatus(200);
            }

        });

    });

  
	//res.sendStatus(200);

});
