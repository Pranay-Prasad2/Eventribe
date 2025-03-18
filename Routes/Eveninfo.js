const { Router } = require('express');
const express = require('express');
const { object } = require('webidl-conversions');
const router = express.Router();
const dbo = require('../DB/connection')
const ObjectId = require("mongodb").ObjectId;


//ROUTE 1: Add Eventinfo using: POST "/api/Eventinfo/addinfo"
router.post('/Addinfo', (req, resp) => {
    let db_connect = dbo.getDb();
    let myobj = {
        Org_name: req.body.Org_name,
        date:req.body.date,
        eventname: req.body.eventname,
        org_url: req.body.org_url,
        about: req.body.about,
        response:req.body.response
    };
    db_connect.collection("Eventinfo").insertOne(myobj, function (err, res) {
        if (err) throw err;
        resp.json(res);
    });
});

//Route2: Fetch all Eventinfo using : GET:"/api/Eventinfo/fetchinfo"
router.get('/fetchinfo', (req, resp) => {
    let db_connect = dbo.getDb("Eventribe");
    db_connect
        .collection("Eventinfo")
        .find({})
        .toArray(function (err, result) {
            if (err) throw err;
            resp.json(result);
        });
})

//Route3: Update Eventinfo using: POST: /api/Eventinfo/updateinfo:id
router.post("/updateinfo/:id", function (req, resp) {
    let db_connect = dbo.getDb();
    let myquery = { _id: ObjectId(req.params.id) };
    let newvalues = {
        $set: {
            Org_name: req.body.Org_name,
            eventname: req.body.eventname,
            org_url: req.body.org_url,
            about: req.body.about
        }
    };
    db_connect.collection("Eventinfo").updateOne(myquery, newvalues, function (err, res) {
        if (err) throw err;
        resp.json(res);
    });
});

//Route :4 Delete the Eventinfo from Database using Delete: /api/Eventinfo/Deleteinfo
router.delete("/deleteinfo/:eventname",function(req,res){
    let db_connect = dbo.getDb();
    db_connect.collection("Eventinfo").deleteOne({org_url:req.params.eventname},function(err,obj){
        if(err) throw err;
        res.json(obj);
    })
})

module.exports =  router;