const express = require("express");

const user_md = require("../models/user");

const router = express.Router();

const helper = require("../helpers/helper")

router.get("/", function(req, res){
    res.json({"message" : "This is Admin page"});
})

router.get("/signup", function(req, res){
    res.render("signup", {data: {}});
})

router.post("/signup", function(req, res){
    const user = req.body;

    if(user.email.trim().length == 0){
        res.render("signup", {data: {error: "Email is required"}});
    }

    if(user.passwd != user.repasswd && user.passwd.trim().length != 0){
        res.render("signup", {data: {error: "Password is not matched"}});
    }

    //Insert into DB
    const password = helper.hash_password(user.passwd)

    userAdd = {
        email: user.email,
        password: password,
        first_name: user.first_name,
        last_name: user.last_name
    }

    // result.then(function(data){
    //     res.json({message: "Insert success"});
    // })
    // .catch(function(err){
    //     res.render("signup", {data: {error: "error"}});
    // })

    const result = user_md.addUser(userAdd);

    // if (!result) {
    //     res.render("signup", {data: {error: "Could not insert data to DB"}});
    // }
    // else {
    //     res.json({message : "Inserted to DB"});
    // }

    result
    .then ( (data) => { res.json({message: "Thanh cong"});})
    .catch( (err) => {res.json({message: err.message})});
});

module.exports = router;