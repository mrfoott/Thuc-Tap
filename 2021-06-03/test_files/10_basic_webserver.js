const http = require("http");

// //res text
// const server = http.createServer(function(req, res){
//     res.writeHead(200, {"Content-Type" : "text/plain"});
//     res.write("AAAAAAAAAAAA");
//     res.end();
// })

// res html
const server = http.createServer(function(req, res){
    res.writeHead(200, {"Content-Type" : "text/html"});
    res.write("<h1>AAAAAAAAA</h1>");
    res.end();
})


server.listen(3000, function(){
    console.log("Server is running on port 3000");
})