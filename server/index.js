const express = require('express');
const connectDb = require('./config/dbconfig');
const app = express();
require('dotenv').config({ path: __dirname + '\\.env' });

// body parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// cors
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', '*');
    next();
});

// default route covaxys.com
app.get('/', (req, res, next) => {
    res.send('Covaxys server running!');
}); 

// routes
app.use('/api/user', require('./routes/api/user'));
app.use('/api/appointment', require('./routes/api/appointment'));

// connect database
connectDb();

// initialize server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}...`);
});