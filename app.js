const express = require("express");
const bodyParser = require("body-parser")
const ejs = require("ejs");
const mongoose = require("mongoose");

const app = express()
const port = process.env.PORT || 3000

app.use("/public", express.static(__dirname + "/public"));
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }))

mongoose.connect("mongodb://localhost:27017/userDB", { useNewUrlParser: true })

const userSchema = {
    email: String,
    password: String
}

const User = new mongoose.model("User", userSchema)

app.get('/', function(req, res) { res.render("main"); });
app.get('/home', function(req, res) { res.redirect("/"); });
app.get('/about', function(req, res) { res.render('about'); });
app.get('/services', function(req, res) { res.render("services"); });
app.get('/portfolio', function(req, res) { res.render("portfolio"); });
app.get('/contact', function(req, res) { res.render("contact"); });
app.get('/admin', function(req, res) { res.sendFile(__dirname + "\\login.html") });

app.listen(port, () => console.log(`Example app listening on port ${port}!`))