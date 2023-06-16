//jshint esversion:6

const express= require("express");
const bodyparser= require("body-parser");

const app= express();
app.set("view engine", "ejs");
app.use(bodyparser.urlencoded({extended:true}));
app.use(express.static("public"));
var usertexts= [];





app.get("/",function(req, res){

    
    res.sendFile(__dirname +"/index.html")
})

app.get("/product",function(req,res){
    res.render("product")
})

app.get("/contact",function (req,res){
    
res.render("contact")
})

app.get("/about", function(req,res){
    res.render("about")
})

app.post("contact", function(req, res){
    var text= req.body.usertexts;

    usertexts.push(text);

    app.redirect(__dirname + "/index.html")

})

app.listen(3000,function(){
console.log("we up and running on port 3000");
})