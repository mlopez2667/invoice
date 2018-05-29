'use strict'

/*DEPENDENCIAS*/
const invoiceController = require('../controllers/invoice');
const express = require('express');
const api = express.Router();
const nodemailer = require('nodemailer');

api.post('/invoice', invoiceController.saveInvoice);
api.get('/invoice', invoiceController.getInvoices);
api.post('/invoiceEmail', invoiceController.emailInvoicesSave);

module.exports = api
