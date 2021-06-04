const express = require("express");
const config = require("config");
const bodyParser = require("body-parser");
const app = express();
const session = require("express-session");

//Body parser
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.set('trust proxy', 1) // trust first proxy
app.use(session({
    secret: config.get("secret_key"),
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true }
}));

//Template
app.set("views", __dirname + "/apps/views");
app.set("view engine", "ejs");

//Static files
app.use("/static", express.static(__dirname + "/public"));

//Controllers config
const controllers = require(__dirname + "/apps/controllers");

app.use(controllers);

const host = config.get("server.host");
const port = config.get("server.port");

app.listen(port, host, function(){
    console.log("Server is running on port", port);
})

process.on('uncaughtException', function (err) {
    console.log(err);
}); 