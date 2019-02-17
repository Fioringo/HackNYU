import express from 'express';
import path from 'path';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import db from './db';
import apiRouter from './router';

const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(morgan('dev'));
app.use(express.static('dist'));
app.use(apiRouter);

app.disable('x-powered-by');

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`App listening on port ${port}!`))
