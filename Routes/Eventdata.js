const { Router } = require('express');
const express = require('express');
const { object } = require('webidl-conversions');
const router = express.Router();
const dbo = require('../DB/connection')
const ObjectId = require("mongodb").ObjectId;


//Router 1>  Push user data in DB: POST: /api/eventdata/pushdata
router.post('/pushdata', (req, resp) => {
    const arr = Object.getOwnPropertyNames(req.body);
    const brr = Object.values(req.body);
    let db_connect = dbo.getDb();
    let myobj = arr.reduce((i,key,idx)=> ({...i,[key]:brr[idx]}),{});
    db_connect.collection("data").insertOne(myobj, function (err, res) {
        if (err) throw err;
        resp.json(res);
    });
});

//Router 2> fetch data using get: /api/eventdata/fetcheventdata
router.get('/fetcheventdata',(req,resp)=>{
    let db_connect = dbo.getDb("Eventribe");
    db_connect.collection("data").find({}).toArray(function(err,res){
        if(err) throw err;
        resp.json(res);
    });
});


module.exports = router