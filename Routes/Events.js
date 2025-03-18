const { Router, response } = require('express');
const express = require('express');
const router = express.Router();
const dbo = require('../DB/connection')
const ObjectId = require("mongodb").ObjectId;

//ROUTE 1: Create a Event using: POST "/api/Events/Addevent"
router.post('/Addevent', (req, resp) => {
    const arr = Object.getOwnPropertyNames(req.body);
    const brr = Object.values(req.body);
    let db_connect = dbo.getDb();
    // let myobj = arr.reduce((i,key,idx)=>({...i,[key]:brr[idx]}),{});
    let myobj = req.body;
    db_connect.collection('Events').insertMany(myobj, function (err, res) {
        if (err) throw err;
        resp.json(res);
    });
});

//Route2: Fetch all event using : GET:"/api/event/fetchallevents"
router.get('/fetchallevents', (req, resp) => {
    let db_connect = dbo.getDb("Eventribe");
    db_connect
        .collection('Events')
        .find({})
        .toArray(function (err, result) {
            if (err) throw err;
            resp.json(result);
        });
})

//Route3: Update Event using: POST: /api/users/Update:id
router.post("/updateevent", function (req, resp) {
    let db_connect = dbo.getDb();
    let newvalues={
        $set: { 

        }
    };
    db_connect.collection("Events").updateOne(myquery, newvalues,function (err, res) {
        if (err) throw err;
        resp.json(res);
    });
});

//Route :4 Delete the Evenet from Database using Delete: /api/event/deleteEvent
router.delete("/deleteEvent/:eventname",function(req,res){
    let db_connect = dbo.getDb();
    db_connect.collection("Events").deleteMany({org_url:req.params.eventname},function(err,obj){
        if(err) throw err;
        res.json(obj);
    })
})

module.exports = router