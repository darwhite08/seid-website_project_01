require('dotenv').config()
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

app.get('/', function(req, res) {
    let header_one = " hello this is my world  okay";
    let header_2 = " hello this is my world"
    let paragraph_one = " hello this is my x world  okay";
    let paragraph_two = " hello this is my <br>world"

    res.render("main", {
        header1: header_one,
        header2: header_2,
        paragraph1: paragraph_one,
        paragraph2: paragraph_two
    });

});
app.get('/home', function(req, res) { res.redirect("/"); });
app.get('/about', function(req, res) { res.render('about'); });
app.get('/services', function(req, res) { res.render("services"); });
app.get('/portfolio', function(req, res) { res.render("portfolio"); });
app.get('/contact', function(req, res) { res.render("contact"); });
app.get('/login', function(req, res) { res.render("\login") });
app.get('/notfound', function(req, res) { res.redirect("/") });
app.post('/login', function(req, res) {
    let username = req.body.username;
    let password = req.body.password;
    if (process.env.USER == username && process.env.PASS == password) {
        res.render('edit');
    } else {
        res.send("wrong password")
    }
});

app.post('/homepage', function(req, res) {
    let text = req.body.firstheader;
    let header_2 = req.body.header2;
    let paragraph_1 = req.body.hometext1;
    let paragraph_2 = req.body.hometext2;



});
app.post('/aboutsection', function(req, res) {
    let header_1 = req.body.header1;
    let header_2 = req.body.header2;
    let header_3 = req.body.header2;
    let paragraph_1 = req.body.hometext1;
    let paragraph_2 = req.body.hometext2;
    let paragraph_3 = req.body.hometext3;
});
app.post('/protofolio', function(req, res) {
    let paragraph_3 = req.body.imgurl;

});
app.get('*', function(req, res) { res.render("not-found") });
app.listen(port, () => console.log(`Example app listening on port ${port}!`))