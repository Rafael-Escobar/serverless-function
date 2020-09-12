'use strict';
const axios = require("axios");
exports.handler = async (event, context, callback) => {
    const productId = event.currentIntent.slots["productId"];
    var productName = '';
    const instanceAuth = axios.create({
        baseURL: "https://hiringcoders2.vtexcommercestable.com.br/api/",
        headers: {
            "content-type": "application/json",
            accept: "application/json",
            "x-vtex-api-appkey": "vtexappkey-hiringcoders2-FGCKLH",
            "x-vtex-api-apptoken":
                "BUXUGBCSVZBMEDYDTHONEVQCJKOMVLUPOGLMQSFGZRDCRVBIIVNTZFKFDVKVMQWKEMXYRMMBCIOMRNKNJGDAYAQJVFIVHKTJUTXFYDQWJLRQQXOQKWMGMWLEVNCLEQTR",
        },
    });

    instanceAuth
    .get("/catalog/pvt/product/2")
    .then(({ data }) => {
        productName = data.Name;
        const answer = `The product ${productId} is ${productName}`;
        callback(null, {
            "dialogAction": {
                "type": "Close",
                "fulfillmentState": "Fulfilled", // <-- Required
                "message": {
                    "contentType": "PlainText",
                    "content": answer
                }
            }
        });
        // return {
        //     "sessionAttributes": {},
        //     "dialogAction": {
        //         "type": "Close",
        //         "fulfillmentState": "Fulfilled",
        //         "message": {
        //             "contentType": "PlainText",
        //             "content": answer
        //         }
        //     }
        // }
        // console.log("productName", productName);
    })
    .catch((err) => {
        console.log("err", err);
        const answer = `We cant found the product ${productId} `;

        return {
            "sessionAttributes": {},
            "dialogAction": {
                "type": "Close",
                "fulfillmentState": "Fulfilled",
                "message": {
                    "contentType": "PlainText",
                    "content": answer
                }
            }
        }
    });
};
