const express = require("express");
const app = express();
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
const { SignupModel } = require("./Models/AuthModels");
const { connect } = require("./config/db");
app.use(express.json());
app.get("/", (req, res) => {
  res.send("welcome to page");
});
app.post("/signup", async (req, res) => {
  const {password,email,age}=req.body

   bcrypt.hash(password, 6).then(async function(hash) {
    const user = new SignupModel({email:email,password:hash,age:age});
    await user.save();
  
}).catch((err)=>{
res.send("something is wrong")
})
  res.send("added sucessfully");
});
app.post("/login", async (req, res) => {
  let { email, password } = req.body;

  const user= await SignupModel.findOne(({email}));
let hash=user.password
  bcrypt.compare(password,hash,function(err,result){
    if(result){
      let token = jwt.sign({ email }, 'secret');

      res.send({ msg: "login sucessfull", token: token});
    }else{
      res.send("failed")
    }
    
     })
 });

app.get("/dashboard", async (req, res) => {
const token = req.headers.authorization.split(" ")[1];
  jwt.verify(token, 'secret', function(err, decoded) {
 if(err){
  res.send("Please Login")
 }else{
  res.send(decoded)
 }
  });
 });

app.listen(8080, async () => {
  try {
    await connect;
    console.log("connected to db");
  } catch (err) {
    console.log(err);
  }
});
