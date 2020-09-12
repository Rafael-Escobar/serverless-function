"use strict";
const axios = require("axios");
exports.handler = async (event, context, callback) => {
    const productId = event.currentIntent.slots["productId"];

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

    const res = await instanceAuth.get("/catalog/pvt/product/" + productId);
    const productName = res.data.Name;
    const answer = `The product ${productId} is ${productName}`;
    const response = {
        sessionAttributes: {},
        dialogAction: {
            type: "Close",
            fulfillmentState: "Fulfilled",
            message: {
                contentType: "PlainText",
                content: answer,
            },
        },
    };

    callback(null, response);
};
