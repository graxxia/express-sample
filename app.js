const express = require("express");
const app = express(); // if we want to use express we better make an onject, can be executed as function
const port = 9000; //random number not bellow 124000
//response to a get request , req=request, res=response
app.get("/", (req, res) => {
  res.send("time for lunch!");
});

///tell ur programm to run the server
//method to listen on, our port
app.listen(port, () => {
  console.log(`listening on port ${port} `);
});
