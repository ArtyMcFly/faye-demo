var http = require("http");
var faye = require("faye");

var server = http.createServer(function(request, response) { }).listen(80, "0.0.0.0");

bayeux = new faye.NodeAdapter({mount: '/faye', timeout: 45});

bayeux.attach(server);

bayeux.on("handshake", function(clientId){})

bayeux.on("subscribe", function(clientId, origChannel){})

bayeux.on("unsubscribe", function(clientId, origChannel){})

bayeux.on("publish", function(clientId, origChannel, data){})

bayeux.on("disconnect", function(clientId){})

bayeux.addExtension({
    incoming: function(message, callback){
        callback(message);
    },
    outgoing: function(message, callback){
        callback(message);
    }
})

console.log("Faye server running on port 80!");