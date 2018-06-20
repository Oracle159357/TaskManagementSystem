import 'babel-polyfill';
import express from 'express';
import path from 'path';
import api from 'api';
import bodyParser from "body-parser";

const app = express();
app.use(bodyParser.urlencoded({extended: false}));

app.use(bodyParser.json());
app.use('/', express.static(path.resolve(__dirname, 'public')));
app.use('/api', api);

const port = 3000;

app.listen(port, () => console.log(`Listening on port ${port}.`));
