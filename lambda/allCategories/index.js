"use strict";
const axios = require("axios");
const config = require("./config");
const { default: config } = require("./config");
exports.handler = async (event, context, callback) => {
    const searchCategory = event.currentIntent.slots["categoryId"];

    const instanceAuth = axios.create({
        baseURL: config.url,
        headers: {
            "content-type": "application/json",
            accept: "application/json",
            "x-vtex-api-appkey": config.key,
            "x-vtex-api-apptoken": config.token,
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
            let Category = '';
            if (item.children.length > 0) {
                let subCategories = item.children.map((items) => {
                    return items.name;
                });
                Category += subCategories.join(', ');
            }
            answer += Category.length > 0 ? Category + ", " : '';
        })
        answer += "For more info about the products, please type: Do you have 'Here come the category you want to know about' ?";

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
