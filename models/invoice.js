'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const InvoiceSchema = Schema({
	logo: String,
	from_client: String,
	to_client: String,
	date: Date,
	number_invoice: Number,
	payment: String,
	expiration: Date,
	items: {type: Array, "default" : [] },
	subtotal: Number,
	discount: Number,
	shipping: Number,
	tax: Number,
	total: Number,
	note: String,
	terms: String
});

module.exports = mongoose.model('Invoice',InvoiceSchema)