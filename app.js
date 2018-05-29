'use strict'

/*DEPENDENCIAS*/

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const api = require('./routers');
const nodemailer = require('nodemailer');

/*CONTROLLER*/

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use('/api', api);

module.exports = app