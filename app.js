const express = require("express");
const bodyParser = require("body-parser")
const ejs = require("ejs");

const app = express()
const port = process.env.PORT || 3000

app.use("/public", express.static(__dirname + "/public"));
app.set("view engine", "ejs");

app.get('/', function(req, res) { res.render("main"); });
app.get('/home', function(req, res) { res.redirect("/"); });
app.get('/about', function(req, res) { res.render('about'); });
app.get('/services', function(req, res) { res.render('services'); });
app.get('/portfolio', function(req, res) { res.render("portfolio"); });
app.get('/contact', function(req, res) { res.render("contact"); });

app.listen(port, () => console.log(`Example app listening on port ${port}!`))