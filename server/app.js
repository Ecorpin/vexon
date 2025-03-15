require('dotenv').config();
const express = require('express');
const path = require('path');


const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

/** Serve static files from 'assets' directory */
app.use(express.static(path.join(__dirname, '../', 'assets')));

app.get('/', (req, res) => {
    // Render the 'index.ejs' view (you can also pass dynamic data)
    res.render('index', { title: 'Home Page' });
});


const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port http://127.0.0.1:${PORT}`);
});
