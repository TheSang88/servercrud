import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

let UserRouter = require('./router/webrouter')

const config = require('./DB.js');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
 
mongoose.Promise = global.Promise;
mongoose.connect(config.DB, { useNewUrlParser: true })
    .then(
        () => { console.log('Database is connected') },
        err => { console.log('Can not connect to the database' + err) }
    );

app.use('/User', UserRouter);

let PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log("ok port:" + PORT);
});