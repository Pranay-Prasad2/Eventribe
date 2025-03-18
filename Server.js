const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config({ path: "./config.env" });
const path = require('path');
const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());
// get driver connection
const dbo = require("./DB/connection");

app.use('/api/users',require('./Routes/User'));
app.use('/api/events',require('./Routes/Events'));
app.use('/api/eventdata',require('./Routes/Eventdata'));
app.use('/api/Eventinfo',require('./Routes/Eveninfo'));
app.use('/api/Admin',require('./Routes/Admin'));
app.use('/api/payment',require('./Routes/Payment'));
//DB connect
if(process.env.NODE_ENV === 'production'){
  app.use(express.static(path.join(__dirname,'frontend/build')));
  app.get('/*',function(req,res){
    res.sendFile(path.join(__dirname,'frontend/build','index.html'));
  })
}
else{
  app.get('/',(req,res)=>{
    res.send("hello world");
  })
}
app.listen(port, () => {
  // perform a database connection when server starts
  dbo.connectToServer(function (err) {
    if (err) console.error(err);
  });
  console.log(`Server is running on port ${port}`);
});