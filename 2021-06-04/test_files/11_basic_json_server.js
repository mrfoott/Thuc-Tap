const http = require("http");

const server = http.createServer(function(req, res){
    console.log(req.url);
    console.log(req.method);

    //Return JSON data
    const data = {
        "status": 200,
        "message" : "Hellooooooooooo",
        "err": false
    }
    res.writeHead(200, {"Content-Type" : "application/json"});
    res.write(JSON.stringify(data));
    res.end();
})

server.listen(3000, function(){
    console.log("Server is running on port 3000!");
})