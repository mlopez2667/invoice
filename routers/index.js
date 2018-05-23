'use strict'

/*DEPENDENCIAS*/
const invoiceController = require('../controllers/invoice');
const express = require('express');
const api = express.Router();

api.post('/invoice', invoiceController.saveInvoice);
api.get('/invoice', invoiceController.getInvoices);

module.exports = api
