const express = require('express');
const path = require("path");
const bcrypt = require("bcryptjs");
const collection = require("./config"); // Assuming this is your MongoDB collection model

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.set('view engine','ejs');

app.use(express.static("public"));

app.get("/", (req, res)=>{
    res.render("login");
});

app.get("/signup",async (req, res) => {
    res.render("signup");
});

app.post("/signup", async (req, res) =>{
    
    const data = {
        name: req.body.username,
        password: req.body.password
    }

    const existingUser =  await collection.findOne({name: data.name});
    
    if(existingUser){
        res.send("User already exists. Please choose a different username.");
    }else{
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(data.password, saltRounds);
        data.password = hashedPassword;
        const usedata = await collection.insertMany(data);
        console.log(usedata);
    }

    const userdata = await collection.insertMany(data);
    console.log(userdata);
});

app.post("/login", async (req,res) =>{
    try{
        const check = await collection.findOne({name: req.body.username});
        if(!check){
            res.send("Username not found");
        }

        const isPasswordMatch = await bcrypt.compare(req.body.password,check.password);
        if(isPasswordMatch){
            res.render("home"); // Redirect to home page after successful login
        }else{
            req.send("Wrong Password");
        }
    }catch{
        res.send("Wrong Details");
    }
});

app.get('/home', (req, res) => {
    const username = req.session.username;
    if (!username) {
        res.redirect("/"); // Redirect to login page if not logged in
    } else {
        res.render('home', { username: username }); // Render home page with username
    }
});

app.get("/tematika",async (req, res) => {
    res.render("tematika");
});
app.get("/math",async (req, res) => {
    res.render("math");
});
app.get("/history",async (req, res) => {
    res.render("history");
});
app.get("/football",async (req, res) => {
    res.render("football");
});

const port = 5000;
app.listen(port,()=>{
    console.log(`Server Running on Port: ${port}`);
});