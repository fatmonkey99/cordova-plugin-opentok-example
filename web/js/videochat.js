// Sign up for an OpenTok API Key at: https://tokbox.com/signup
// Then generate a sessionId and token at: https://dashboard.tokbox.com

var apiKey = "";
var sessionId = "";
var token = "";

var session = null;
var publisher = null;
var subscriber = null;

function connectVideoChat() {
    console.log("Connect clicked.");
    $('#connectButton').prop('disabled', true);
    $('#disconnectButton').prop('disabled', false);
    $("#div_me").append("<div id='div_me_feed'></div>");
    console.log("Initializing publisher.");
    publisher = TB.initPublisher(apiKey, 'div_me_feed');
    console.log("Initializing session.");
    session = TB.initSession( apiKey, sessionId ); 
    session.on({
        'streamCreated': function( event ){
            console.log("New stream created, subscribing.");
            divId = 'stream' + event.stream.streamId;
            var div = $('<div>').attr('id', divId);
            $("#div_others").append(div);
            subscriber = session.subscribe( event.stream, divId, {subscribeToAudio: false} );
            console.log("Subscribed to stream.");
        }
    });
    console.log("Connecting to session.");
    session.connect(token, function(){
        console.log("Session connected, publishing my stream.");
        session.publish( publisher );
    });
}

function disconnectVideoChat() {
    console.log("Disconnect clicked.");
    $('#connectButton').prop('disabled', false);
    $('#disconnectButton').prop('disabled', true);
    try {
        session.unsubscribe(subscriber);
    }
    catch (err) {
        console.error("Call session unsubscribe failed: " + err.message);
    }
    subscriber = null;
    try {
        session.unpublish(publisher);
    }
    catch (err) {
        console.error("Call session unpublish failed: " + err.message);
    }        
    publisher = null;
    session.disconnect();
    session = null;
}

function initVideoChat() {
    console.log("Initializing video chat.");
    $('#connectButton').on('click', connectVideoChat);
    $('#disconnectButton').on('click', disconnectVideoChat);
    $('#connectButton').prop('disabled', false);
}



