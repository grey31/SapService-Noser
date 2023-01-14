
const request = require("request");
const express = require("express");
const { parse } = require("dotenv");
const router = express.Router();
const app = express();






//#region Post

router.post('/Post', (req, res) => {
    // res.setHeader('Access-Control-Allow-Origin', '*');
    // res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // If needed
    // res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type'); // If needed
    // res.setHeader('Access-Control-Allow-Credentials', true); // If needed
    res.setHeader("Access-Control-Allow-Origin", "*");
    // res.send(req.body);
    // console.log(req.body)
    // console.log("grey")

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
        
            //parse
            // console.log(responseLand.body)
            // console.log(req.body)
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
   
            // res.sendStatus(200);
   
            // res.send(JSON.parse(responseLand.body));
            // console.log(JSON.parse(responseLand.body));
            // //console.log(error);
            //console.log(body);
        });

    });

  
	//res.sendStatus(200);

});


//#endregion


// router.get("/Get", async (req, res) => {
// 	request({
//         url: "https://172.31.13.123:50000/b1s/v1/Login",
//         method: "Post",
//         strictSSL: false,
//         postheaders: { "Content-Type": "application/json" }, 
//         json: {
//             CompanyDB: "Z2TESTNSMMI",
//             UserName: "NS0023",
//             Password: "p@ssw0rd"
//         }
//     }, (error, response, body) => {
    
//         request({
//             url: "https://172.31.13.123:50000/b1s/v1/LandedCosts(20)",
//             method: "Get",
//             strictSSL: false,
//             headers: {
//                 Cookie: 'B1SESSION='+ response.body.SessionId +';'
//               }
        
//         }, (error, responseLand, body) => {   
//             res.setHeader("Access-Control-Allow-Origin", "*");
//             res.send(responseLand.body);
//             console.log(responseLand.body);
//         });
//         // console.log(response.body);
       
//     });
// });

// router.get("/Code", async (req, res) => {
// 	request({
//         url: "https://172.31.13.123:50000/b1s/v1/Login",
//         method: "Post",
//         strictSSL: false,
//         postheaders: { "Content-Type": "application/json" }, 
//         json: {
//             CompanyDB: "Z2TESTNSMMI",
//             UserName: "NS0023",
//             Password: "p@ssw0rd"
//         }
//     }, (error, response, body) => {
    
//         request({
//             url: "https://172.31.13.123:50000/b1s/v1/LandedCostsCodes",
//             method: "Get",
//             strictSSL: false,
//             headers: {
//                 Cookie: 'B1SESSION='+ response.body.SessionId +';'
//               }
        
//         }, (error, responseLand, body) => {   
//             res.setHeader("Access-Control-Allow-Origin", "*");
//             console.log("")
//             res.send(responseLand.body);
//             console.log(responseLand.body);
//         });
//         // console.log(response.body);
       
//     });
// });
module.exports = router;