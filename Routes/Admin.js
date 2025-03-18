const { Router } = require('express');
const express = require('express');
const router = express.Router();
const dbo = require('../DB/connection')
const ObjectId = require("mongodb").ObjectId;
const bcrypt = require('bcrypt');
const salt = 10;

//ROUTE 1: Create a user using: POST "/api/users/AddUser"
router.post('/AddAdmin', (req, resp) => {
    let db_connect = dbo.getDb();
    const plainpassword = req.body.password;
    let myobj;
    bcrypt.hash(plainpassword, salt, function (err, hash) {
        if (err) throw err;
        myobj = {
            password: hash,
        };
        db_connect.collection("Admin").insertOne(myobj, function (err, res) {
            if (err) throw err;
            resp.json(res);
        });
    });
});

//Route 2> Login Admin
router.post("/adminlogin", async function (req, resp) {
    let db_connect = dbo.getDb();
    let success = false;
    let data = await db_connect.collection("Admin").find({}).toArray();
    let comppassword = await bcrypt.compare(req.body.password,data[0].password);
    if(!comppassword){
        return resp.status(400).json({success,error: "Incorrect credentials"});
    }
    success = true;
    resp.json({success,msg:"Welcome"});
});
module.exports = router
