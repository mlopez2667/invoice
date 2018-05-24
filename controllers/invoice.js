'use strict'

const Invoice = require('../models/invoice');

function saveInvoice(req,res){

	console.log('POST /api/invoice')
	console.log(req.body)

	let invoice = new Invoice();
	invoice.logo = req.body.logo;
	invoice.from_client = req.body.from_client;
	invoice.to_client = req.body.to_client;
	invoice.date = Date.now();
	invoice.number_invoice = req.body.number_invoice;
	invoice.payment = req.body.payment;
	invoice.expiration = Date.now();
	invoice.items = req.body.items;
	invoice.subtotal = req.body.subtotal;
	invoice.discount = req.body.discount;
	invoice.shipping = req.body.shipping;
	invoice.tax = req.body.tax;
	invoice.total = req.body.total;
	invoice.note = req.body.note;
	invoice.terms = req.body.terms;

	invoice.save((err, invoiceStored)=>{
		if (err) res.status(500).send({Mensaje:`Error al salvar los datos: ${err} `})

		res.status(200).send({invoice: invoiceStored});
	});
}


function getInvoices(req,res) {

	Invoice.find({}, (err, invoices)=>{
		if(err) return res.status(500).send({mensaje: `Error al realizar la consulta: ${err}`});
		if(!invoices) return res.status(404).send({mensaje: "No Existen Facturas"});

		res.send(200,{invoices});
	})
}

module.exports = {
	saveInvoice,
	getInvoices
}