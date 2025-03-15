require('dotenv').config();
const express = require('express');
const path = require('path');

const webAppRoutes = require('./routes/webapp.routes').default;

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

/** Serve static files from 'assets' directory */
app.use(express.static(path.join(__dirname, '../', 'assets')));

/** extends routing  */
app.use('/', webAppRoutes);


const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Vexon Server is running on port http://127.0.0.1:${PORT}`);
});
