const express = require("express");

const user_md = require("../models/user");
const post_md = require("../models/post")

const router = express.Router();

const helper = require("../helpers/helper");

router.get("/", function(req, res){
    if(req.session.user){
        const data = post_md.getAllPosts();

        const _user = req.session.user;

        data.then(function(posts){
        const data = {
            user: {
                first_name: _user.first_name,
                last_name: _user.last_name,
                email: _user.email,
                address1: _user.address1,
                address2: _user.address2,
                state: _user.state,
                country: _user.country,
                phone: _user.phone
            }
        };
            res.render("updateuserinfo", data)
        }).catch(function(err){
            res.render("updateuserinfo", {data: {error: "Get data error"}})
        });
    }
    else {
        res.redirect("/admin/signin");
    }
});

router.put("/updateuserinfo", function(req, res){
    const params = req.body;

    data = post_md.updateUser(params);

    if(!data){
        res.json({status_code:500})
    }
    else {
        data.then(function(result){
            res.json({status_code: 200})
        }).catch(function(err){
            res.json({status_code: 500})
        })
    }
})

function Post(){
    function bindEvent(){
        $(".update_user_info").click(function(e){
            const params = {
                id: $(".id").val(),
                first_name: $(".upfname").val(),
                last_name: $(".uplname").val(),
                company_name: $(".upcompanyname").val(),
                phone: $(".upphone").val(),
                email: $(".upemail").val(),
            };

            const base_url = location.protocol + "//" + document.domain + ":" + location.port;

            $.ajax({
                url: base_url + "/updateuserinfo",
                type: "PUT",
                data: params,
                dataType: "json",
                success: function(res){
                    if (res && res.status_code == 200){
                        location.reload();
                    }
                }
            })
        })
    }
    bindEvent();
}

$(document).ready(function(){
    new Post();
})

module.exports = router;