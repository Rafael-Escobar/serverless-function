'use strict';
const axios = require("axios");

module.exports.getWeather = async (event) => {
  const city = event.currentIntent.slots["City"];
  const url = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&APPID=08e3ad0437282f0abefa56ee74ab56af";

  try {
    const response = await axios.get(url);
    const data = response.data;

    const answer = "The temperature is " + data.main.temp + "C and Humidity is " + data.main.humidity + "% and " + data.weather[0].description + " is expected.";

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
  } catch (error) {
    console.log(error);
  }
};

module.exports.hello = async event => {
  
  const answer = "Hello people";

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

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};

module.exports.getInfoProduct = async event => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'The product info is!',
        input: event,
      },
      null,
      2
    ),
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
