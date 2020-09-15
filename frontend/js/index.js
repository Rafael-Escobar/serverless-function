// set the focus to the input box
document.getElementById("start-chat").addEventListener('click', ()=>{
    document.getElementById("wisdom").focus();
})

// Initialize the Amazon Cognito credentials provider
AWS.config.region = "eu-west-2"; // Região
AWS.config.credentials = new AWS.CognitoIdentityCredentials({
  IdentityPoolId: "eu-west-2:b8cb1351-39b0-4b4c-8977-b397276fba2f",
});

var lexruntime = new AWS.LexRuntime();
// var lexUserId = "chatbot-demo" + Date.now();
var lexUserId = "serverless-bot";
var sessionAttributes = {};

var isFirstTimeChat = 0
document.getElementById("wisdom").addEventListener('focus', ()=>{
    if(isFirstTimeChat === 0){
        document.getElementById("wisdom").value ='tell me the products you have...'
        isFirstTimeChat++
    }
})
 
function pushChat() {
    document.getElementById('initial-message').style.display = 'none'
    
  // if there is text to be sent...
  var wisdomText = document.getElementById("wisdom");
  if (
    wisdomText &&
    wisdomText.value &&
    wisdomText.value.trim().length > 0
  ) {
    // disable input to show we're sending it
    var wisdom = wisdomText.value.trim();
    wisdomText.value = "...";
    wisdomText.locked = true;

    // send it to the Lex runtime
    var params = {
      botAlias: "$LATEST",
      botName: "productInfoVtex",
      inputText: wisdom,
      userId: lexUserId,
      sessionAttributes: sessionAttributes,
    };
    showRequest(wisdom);
    lexruntime.postText(params, function (err, data) {
      if (err) {
        console.log(err, err.stack);
        showError(
          "Error:  " + err.message + " (see console for details)"
        );
      }
      if (data) {
        // capture the sessionAttributes for the next cycle
        sessionAttributes = data.sessionAttributes;
        // show response and/or error/dialog status
        showResponse(data);
      }
      // re-enable input
      wisdomText.value = "";
      wisdomText.locked = false;
    });
  }
  // we always cancel form submission
  return false;
}

function showRequest(daText) {
  var conversationDiv = document.getElementById("conversation");
  var requestPara = document.createElement("P");
  requestPara.className = "userRequest";
  requestPara.appendChild(document.createTextNode(daText));
  conversationDiv.appendChild(requestPara);
  conversationDiv.appendChild(document.createElement("br"))
  conversationDiv.appendChild(document.createElement("br"))
  conversationDiv.appendChild(document.createElement("br"))
  conversationDiv.scrollTop = conversationDiv.scrollHeight;
}

function showError(daText) {
  var conversationDiv = document.getElementById("conversation");
  var errorPara = document.createElement("P");
  errorPara.className = "lexError";
  errorPara.appendChild(document.createTextNode(daText));
  conversationDiv.appendChild(errorPara);
  conversationDiv.scrollTop = conversationDiv.scrollHeight;
}

function showResponse(lexResponse) {
  var conversationDiv = document.getElementById("conversation");
  var responsePara = document.createElement("P");
  responsePara.className = "lexResponse";
  if (lexResponse.message) {
      if(lexResponse.message.includes('[') && lexResponse.message.includes(']')){
            let init = lexResponse.message.indexOf('[') + 1
            let end = lexResponse.message.indexOf(']') 
            console.log(init)
            console.log(end)

            let url = lexResponse.message.substring(init, end)
            console.log(url)
            let newString = lexResponse.message
            console.log(newString.replace(`[${url}]`, "See products!"))
            conversationDiv.appendChild(document.createElement("br"))
            conversationDiv.appendChild(document.createElement("br"))
            conversationDiv.appendChild(document.createElement("br"))
            responsePara.innerHTML = `${newString.replace(`[${url}]`, `<span><a href=${url} target="_blank" class="chat-link"> See products! </a></span>`)}`
              responsePara.appendChild(document.createElement("br"));
      }else{
        responsePara.appendChild(
            document.createTextNode(lexResponse.message)
          );
          responsePara.appendChild(document.createElement("br"));
      }
  }
  if (lexResponse.dialogState === "ReadyForFulfillment") {
    responsePara.appendChild(
      document.createTextNode("Ready for fulfillment")
    );
    // TODO:  show slot values
  } 
//   else {
//     responsePara.appendChild(
//       document.createTextNode("(" + lexResponse.dialogState + ")")
//     );
//   }
  conversationDiv.appendChild(responsePara);
  conversationDiv.appendChild(document.createElement("br"))
  conversationDiv.appendChild(document.createElement("br"))
  conversationDiv.appendChild(document.createElement("br"))
  conversationDiv.scrollTop = conversationDiv.scrollHeight;
}