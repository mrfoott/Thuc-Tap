const express = require("express");

const router = express.Router();

router.use("/admin", require(__dirname + "/admin.js"));
router.use("/blog", require(__dirname + "/blog.js"));

router.get("/", function(req, res){
    res.render("test")
});

module.exports = router;