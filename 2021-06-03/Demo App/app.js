const express = require("express");
const config = require("config");
const bodyParser = require("body-parser");
const app = express();

//Body parser
app.use(express.json());

app.use(express.urlencoded({extended: true}));

//Template
app.set("views", __dirname + "/apps/views");
app.set("view engine", "ejs");

//Static files
app.use("/static", express.static(__dirname + "/public"));

const controllers = require(__dirname + "/apps/controllers");

app.use(controllers);

const host = config.get("server.host");
const port = config.get("server.port");

app.listen(port, host, function(){
    console.log("Server is running on port", port);
})