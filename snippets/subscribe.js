client.subscribe("/faye-demo" , function(data){
    console.log("Message received: ");
    console.log(data);
})