import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import 'dotenv/config'
let UserRouter = require('./router/webrouter')

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


mongoose.connect(process.env.MONGODB)
    .then(
        () => { console.log('Database is connected') },
        err => { console.log('Can not connect to the database' + err) }
    );

app.use('/User', UserRouter);

let PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log("ok dang chay port:" + PORT);
});