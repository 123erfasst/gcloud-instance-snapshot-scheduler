'use strict';

const express = require('express');
const app = express();
const instanceHandler = require('./instanceHandler');
const snapshotHandler = require('./snapshotHandler');

app.get('/start/:instances', (req, res) => instanceHandler(req, res, 'start'));
app.get('/stop/:instances', (req, res) => instanceHandler(req, res, 'stop'));
app.get('/create/:zoneName/:diskName', (req, res) => snapshotHandler(req, res));

app.listen(8080, () => {
    console.log(`App listening`);
});