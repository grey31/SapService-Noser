
const request = require("request");
const express = require("express");
const { parse } = require("dotenv");
const router = express.Router();
const app = express();
const bodyParser = require("body-parser");
const { json } = require("body-parser");

app.use(
	bodyParser.json({
		limit: "50mb",
		parameterLimit: 1000000,
		extended: true
	})
);

app.use(express.json())
app.use(express.urlencoded({ extended: true}));



//#region Post
router.post('/Grpo', (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    // res.setHeader('Access-Control-Allow-Origin', '*');
    // res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // If needed
    // res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type'); // If needed
    // res.setHeader('Access-Control-Allow-Credentials', true); // If needed
    // //res.setHeader("Access-Control-Allow-Origin", "*");
    console.log(req.body)
    //console.log(res)
    console.log("grey")

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
        res.setHeader("Access-Control-Allow-Origin", "*");
        // response.setHeader('Access-Control-Allow-Origin', '*');
        // response.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // If needed
        // response.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type'); // If needed
        // response.setHeader('Access-Control-Allow-Credentials', true); // If needed
        // console.log(response.body)


        request({
            url: 'https://172.31.13.123:50000/b1s/v1/PurchaseDeliveryNotes('+req.body.DocEntry+')',
            method: "Get",
            strictSSL: false,
            //json: true,
            headers: {
                'Content-Type': 'application/json',
                Cookie: 'B1SESSION='+ response.body.SessionId +';'
            },
            body: JSON.stringify(req.body)
        
        }, (error, responseLand, body) => {   
            res.setHeader("Access-Control-Allow-Origin", "*");


            if (error) {
                res.send(error);
                res.send("grey grey");
       
                console.log(error);
            } else {
                ///res.send("michael gery");
                res.send(JSON.parse(responseLand.body));
                //res.sendStatus(200);
            }
          
           
            // //res.send("Grey Michael");
           // res.send(JSON.parse(responseLand.body));
            // console.log(JSON.parse(responseLand.body));
            // console.log(error);
            //console.log(body);
        });

    });

  
	//res.sendStatus(200);

});
//#endregion

//#region Get
router.post("/Get", (req, res) => {


        res.setHeader("Access-Control-Allow-Origin", "*");
        res.send(req.body);
        console.log(req.body);

    



	// request({
    //     url: "https://172.31.13.123:50000/b1s/v1/Login",
    //     method: "Post",
    //     strictSSL: false,
    //     postheaders: { "Content-Type": "application/json" }, 
    //     json: {
    //         CompanyDB: "Z2TESTNSMMI",
    //         UserName: "NS0023",
    //         Password: "p@ssw0rd"
    //     }
    // }, (error, response, body) => {
    
    //     request({
    //         url: "https://172.31.13.123:50000/b1s/v1/PurchaseDeliveryNotes",
            
    //         method: "Get",
    //         strictSSL: false,
    //         contentType: "application/json",
    //         datatype: "json",
    //         headers: {
    //             'Content-Type': 'application/json',
    //             Cookie: 'B1SESSION='+ response.body.SessionId +';'
    //           }
        
    //     }, (error, responseLand, body) => {   
    //         res.setHeader("Access-Control-Allow-Origin", "*");
 
    //         let test = json(responseLand.body.value);



    //         res.send(responseLand.body);
    //         console.log(test.length);
    //     });
     
       
    // });
});
//#endregion


module.exports = router;