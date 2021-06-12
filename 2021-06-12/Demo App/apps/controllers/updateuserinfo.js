const express = require("express");

const multiparty = require("multiparty");

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

router.put("/", function(req, res){
    const form = new multiparty.Form({ uploadDir: 'public/img' })
    form.parse(req, (err, fields, files) => {
        if(err){
            res.json({})
        }
        else {
            const user = {
                first_name: fields.upfname[0],
                last_name: fields.uplname[0],
                phone: fields.upphone[0],
                company_name: fields.upcompanyname[0],
                company_site: fields.upcompanysite[0],
                imgpath: (typeof files.addAvatar == 'undefined') ? '' : files.addAvatar[0].path
            }
            user_md.updateUser(user, req.session.user.email)
            .then(result => {
                res.json({message: 'THANH CONG'})
            })
            .catch(error => {
                res.json({message: 'THAT BAI'})      
            })
        }
    })
})

// function Post(){
//     function bindEvent(){
//         $(".update_user_info").click(function(e){
//             const params = {
//                 first_name: $(".upfname").val(),
//                 last_name: $(".uplname").val(),
//                 company_name: $(".upcompanyname").val(),
//                 phone: $(".upphone").val(),
//                 email: $(".upemail").val(),
//             };

//             const base_url = location.protocol + "//" + document.domain + ":" + location.port;

//             $.ajax({
//                 url: base_url + "/updateuserinfo",
//                 type: "PUT",
//                 data: params,
//                 dataType: "json",
//                 success: function(res){
//                     if (res && res.status_code == 200){
//                         location.reload();
//                     }
//                 }
//             })
//         })
//     }
//     bindEvent();
// }

// $(document).ready(function(){
//     new Post();
// })

module.exports = router;