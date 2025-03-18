const { Router } = require('express');
const express = require('express');
const router = express.Router();
const dbo = require('../DB/connection')
const ObjectId = require("mongodb").ObjectId;
const bcrypt = require('bcrypt');
const salt = 10;

//ROUTE 1: Create a user using: POST "/api/users/AddUser"
router.post('/AddUser', (req, resp) => {
    let db_connect = dbo.getDb();
    const plainpassword = req.body.password;
    let myobj;
    bcrypt.hash(plainpassword, salt, function (err, hash) {
        if (err) throw err;
        myobj = {
            month: req.body.month,
            year:req.body.year,
            Org_name:req.body.Org_name,
            url: req.body.url,
            email: req.body.email,
            password: hash,
            about:req.body.about,
            tagline:req.body.tagline,
            link1:req.body.link1,
            link2:req.body.link2,
            link3:req.body.link3,
            theme:1
        };
        db_connect.collection("Users").insertOne(myobj, function (err, res) {
            if (err) throw err;
            resp.json(res);
        });
    });
});

//Route2: Fetch all users using : GET:"/api/users/fetchall"
router.get('/fetchallusers', (req, resp) => {
    let db_connect = dbo.getDb("Eventribe");
    db_connect
        .collection("Users")
        .find({})
        .toArray(function (err, result) {
            if (err) throw err;
            resp.json(result);
        });
})

//Route3: Update user using: POST: /api/users/Update:id
router.post("/updateclient/:id", function (req, resp) {
    let db_connect = dbo.getDb();
    let myquery = { _id: ObjectId(req.params.id) };
    const plainpassword = req.body.password;
    let newvalues;
    if(plainpassword === ''){
        newvalues = {
            $set: {
                Org_name:req.body.Org_name,
                url: req.body.url,
                email: req.body.email,
                about:req.body.about,
                tagline:req.body.tagline,
                link1:req.body.link1,
                link2:req.body.link2,
                link3:req.body.link3,
                theme:req.body.theme
            }
        };
        db_connect.collection("Users").updateOne(myquery, newvalues,function (err, res) {
            if (err) throw err;
            resp.json(res);
        });
    }
    else{
        bcrypt.hash(plainpassword, salt, function (err, hash) {
            if (err) throw err;
            newvalues = {
                $set: {
                    Org_name:req.body.Org_name,
                    url: req.body.url,
                    email: req.body.email,
                    password: hash,
                    tagline:req.body.tagline,
                    about:req.body.about,
                    link1:req.body.link1,
                    link2:req.body.link2,
                    link3:req.body.link3,
                    theme:req.body.theme
                }
            };
            db_connect.collection("Users").updateOne(myquery, newvalues,function (err, res) {
                if (err) throw err;
                resp.json({res,hash});
            });
        });
    }
});

//Route 4> Detele User data
router.delete("/deleteuser/:id", (req, response) => {
    let db_connect = dbo.getDb();
    let myquery = { _id: ObjectId(req.params.id) };
    db_connect.collection("Users").deleteOne(myquery, function (err, obj) {
        if (err) throw err;
        console.log("1 document deleted");
        response.json(obj);
    });
});

//Route 5> Login user
router.post('/UserLogin',async(req,res)=>{
    const db_connect = dbo.getDb();
    const {url,password} = req.body;
    let success = false;
    let user = await db_connect.collection("Users").findOne({url:url});
    if(!user){
        return res.json(success);
    }
    const passwordcompare = await bcrypt.compare(password,user.password);
    if(!passwordcompare){
        return res.json(success);
    }
    const id = user._id;
    success = true;
    return res.json({success,id});
})

module.exports = router