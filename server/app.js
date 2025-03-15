const express = require('express');
const path = require('path');

const app = express();

// Set EJS as templating engine and define views directory
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files from 'public' directory
app.use(express.static(path.join(__dirname, 'assets')));

// Define your routes
app.get('/', (req, res) => {
    // Render the 'index.ejs' view (you can also pass dynamic data)
    res.render('index', { title: 'Home Page' });
});

// Additional routes can be added here

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
