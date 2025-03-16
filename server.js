require('dotenv').config();
const express = require('express');
const path = require('path');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

app.get("/", async (req, res) => {
    console.log("=>>> service home page ::: ")
    const context = {
        title: 'Home Page'
    };
    res.render('index', context);
});

app.get("/about", async (req, res) => {
    console.log("=>>> service about page ::: ")
    const context = {
        title: 'Home Page'
    };
    res.render('about', context);
});


app.get("/career", async (req, res) => {
    console.log("=>>> service career page ::: ")
    const context = {
        title: 'Home Page'
    };
    res.render('career', context);
});

app.get("/contact", async (req, res) => {
    console.log("=>>> service contact page ::: ")
    const context = {
        title: 'Home Page'
    };
    res.render('contact', context);
});

app.get("/establishment", async (req, res) => {
    console.log("=>>> service establishment page ::: ")
    const context = {
        title: 'Home Page'
    };
    res.render('establishment', context);
});

app.get("/events", async (req, res) => {
    console.log("=>>> service events page ::: ")
    const context = {
        title: 'Home Page'
    };
    res.render('events', context);
});

app.get("/news", async (req, res) => {
    console.log("=>>> service news page ::: ")
    const context = {
        title: 'Home Page'
    };
    res.render('news', context);
});

app.get("/particle-wave", async (req, res) => {
    console.log("=>>> service particle-wave page ::: ")
    const context = {
        title: 'Home Page'
    };
    res.render('particle-wave', context);
});

app.get("/test", async (req, res) => {
    console.log("=>>> service test page ::: ")
    const context = {
        title: 'Home Page'
    };
    res.render('test', context);
});



const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Vexon Server is running on port http://127.0.0.1:${PORT}`);
});
