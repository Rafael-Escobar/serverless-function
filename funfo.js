'use strict';
const axios = require("axios");
exports.handler = async (event, context, callback) => {
    const productId = event.currentIntent.slots["productId"];
    var productName = '';
    const res = await axios.get('https://api.weather.gov/points/39.7456,-97.0892');

    // const response = {
    //   statusCode: 200,
    //   body: JSON.stringify(res.data),
    // };
    const response = {
        sessionAttributes: {},
        dialogAction: {
            type: "Close",
            fulfillmentState: "Fulfilled",
            message: {
                contentType: "PlainText",
                content: JSON.stringify(res.data),
            },
        },
    };

    callback(null, response);
    // const instanceAuth = axios.create({
    //     baseURL: "https://hiringcoders2.vtexcommercestable.com.br/api/",
    //     headers: {
    //         "content-type": "application/json",
    //         accept: "application/json",
    //         "x-vtex-api-appkey": "vtexappkey-hiringcoders2-FGCKLH",
    //         "x-vtex-api-apptoken":
    //             "BUXUGBCSVZBMEDYDTHONEVQCJKOMVLUPOGLMQSFGZRDCRVBIIVNTZFKFDVKVMQWKEMXYRMMBCIOMRNKNJGDAYAQJVFIVHKTJUTXFYDQWJLRQQXOQKWMGMWLEVNCLEQTR",
    //     },
    // });
    // console.log("chegou");
    // instanceAuth
    // .get("/catalog/pvt/product/2")
    // .then(({ data }) => {
    //     productName = data.Name;
    //     const answer = `The product ${productId} is ${productName}`;
    //     console.log(data);
    //     return {
    //         "sessionAttributes": {
    //             "ondeestamos":"then"
    //         },
    //         "dialogAction": {
    //             "type": "ConfirmIntent",
    //             "fulfillmentState": "Fulfilled",
    //             "message": {
    //                 "contentType": "PlainText",
    //                 "content": answer
    //             }
    //         }
    //     }
    //     // console.log("productName", productName);
    // })
    // .catch((err) => {
    //     console.log("err", err);
    //     const answer = `We cant found the product  `;

    //     return {
    //         "sessionAttributes": {
    //             "ondeestamos":"catch"
    //         },
    //         "dialogAction": {
    //             "type": "Close",
    //             "fulfillmentState": "Fulfilled",
    //             "message": {
    //                 "contentType": "PlainText",
    //                 "content": answer
    //             }
    //         }
    //     }
    // });


};



