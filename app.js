// imports
const express = require('express');
const app = express();

const apiRoutes = require('./routes/apiRoutes');
const viewRoutes = require('./routes/viewRoutes');
const databaseController = require('./controllers/databaseController');

// Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());

// set the view engine to ejs
app.set('view engine', 'ejs');

// connect to Postgresql
databaseController.checkAndCreateTable();

app.use(apiRoutes);
app.use(viewRoutes);


const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`listing on port ${port}...`));