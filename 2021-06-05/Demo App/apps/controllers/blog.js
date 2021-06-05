const express = require("express");
const router = express.Router();

const post_md = require("../models/post");

router.get("/", function(req, res){
    const datablog = post_md.getAllPosts();

    datablog.then(function(posts){
        const result = {
            posts: posts,
            error: false
        };
        res.render("blog/index", {data: result});
    }).catch(function(err){
        const result = {
            error: "Could not get posts"
        };
        res.render("blog/index", {data: result});
    });

    // res.render("blog/index");
});

module.exports = router;