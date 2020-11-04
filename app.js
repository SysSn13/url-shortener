// imports
const express = require('express');
const app = express();
const {Pool} = require('pg');


const apiRoutes = require('./routes/apiRoutes');
const viewRoutes = require('./routes/viewRoutes');
// Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());

// set the view engine to ejs
app.set('view engine', 'ejs');



app.use(apiRoutes);
app.use(viewRoutes);

const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`listing on port ${port}...`));

// connectionString format -> "postgres://*USERNAME*:*PASSWORD*@*HOST*:*PORT*/*DATABASE*"
var connectionString = process.env.DATABASE_URL || "postgres://postgres:dbpass@localhost:5432/urlsdb";

// create a connection pool for postgresql
const pool = new Pool({
    connectionString:connectionString,
    ssl: {
        rejectUnauthorized: false
    }
});

pool.on('error', (err, client) => {
    console.error('Error:', err);
});
