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

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Vexon Server is running on port http://127.0.0.1:${PORT}`);
});
