const express = require("express");
const app = express();
app.use(express.json());
const dns = require("node:dns");
const fs = require("fs");
const { Console } = require("node:console");
app.post("/getmeip", (res, req) => {
  const { website_name } = res.body;

  dns.lookup(website_name, (err, address, family) => {
    let ip = address;
    req.send(`ip_address is ${ip}`);
  });
});

app.post("/products/create", (req, res) => {
  const payload = JSON.stringify(req.body);
  const data = fs.readFileSync("./db.json", { encoding: "utf-8" });
  const pardata = JSON.parse(data);
  const products = pardata.products;
  const newpro = [...products, JSON.parse(payload)];
  pardata.products = newpro;

  const latdata = JSON.stringify(pardata);
  fs.writeFileSync("./db.json", latdata, "utf-8");
  res.send("welcome data");
});

app.listen(7000);
