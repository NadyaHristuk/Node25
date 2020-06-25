const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.json({
    a:1,
    b:2
  });
});

app.get("/hello", (req, res) => {
  res.send("dfsdf");
});

app.post


app.post("/", (req, res) => {

  res.send(`Значение a - ${req.body.a}`);
 
});



app.listen(3002, () => {
  console.log("Server is runnig on port", 3002);
});
