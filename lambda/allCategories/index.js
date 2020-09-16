"use strict";
const axios = require("axios");
exports.handler = async (event, context, callback) => {
    const searchCategory = event.currentIntent.slots["categoryId"];

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

    const res = await instanceAuth.get("catalog_system/pub/category/tree/1");

    var answer = '';
    // console.log(res.data);
    if (res.status == 200) {
        answer = 'We have the following category : ';
        if (res.data.length > 1) {
            answer = 'We have the following categories: ';
        }
        res.data.forEach((item) => {
            let Category = item.Title;
            if (item.children.length > 0) {
                let subCategories = item.children.map((items) => {
                    return items.name;
                });
                Category += ` like ${subCategories.join(' or ')}`
            }
            answer += Category+ " ,";
        })

    } else {
        answer = "Sorry in the moment we don't have any category!"
    }


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
