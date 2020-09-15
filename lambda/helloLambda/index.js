exports.handler = async (event, context, callback) => {

    var inputTranscript = event.inputTranscript;
    var answer = `Hi, I'm Homer. How can I help you?`;

    if (['good night', 'good morning', 'good afternoon'].indexOf(inputTranscript.toLowerCase()) >= 0) {
        answer = `${inputTranscript}, I'm Homer. How can I help you?`;
    } else if ('hi can you help me' === inputTranscript.toLowerCase()) {
        answer = `Yes sure, I'm Homer. What do you need?`;
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
