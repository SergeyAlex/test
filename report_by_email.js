const express = require('express')
const cron = require('node-cron')
const myrep = require('./my_report/index')
const fs = require('fs');
const path = require('path');
//const pdfMake = require('pdfmake');
//const pdfFonts = require('pdfmake/build/vfs_fonts');
const PdfPrinter = require('./node_modules/pdfmake/src/printer');
const nodemailer = require('nodemailer');

const port = 3005
const app = express()

async function  send_report() {

	var header = [
	"Водитель", "Погрузчик", "Дата", "Склад", 
	{image:'./img/1.jpg', width: 25},
	{image:'./img/1.jpg', width: 25},
	{image:'./img/1.jpg', width: 25},
	{image:'./img/1.jpg', width: 25},
	{image:'./img/1.jpg', width: 25},
	{image:'./img/1.jpg', width: 25},
	{image:'./img/1.jpg', width: 25},
	{image:'./img/1.jpg', width: 25}
	]

	var col = []
	col.push(header);
	var raw = []
	let request_data = await myrep.m_today();
	request_data.forEach(function(item, i, arr) {
		Object.entries(item).forEach(([key, val]) => {
		raw.push(val);
		})
		col.push(raw);
		raw = []
	})
	
	
	var fonts = {
	Roboto: {
		normal: 'fonts/Roboto-Regular.ttf',
		bold: 'fonts/Roboto-Medium.ttf',
		italics: 'fonts/Roboto-Italic.ttf',
		bolditalics: 'fonts/Roboto-MediumItalic.ttf'
	}
};
	var printer = new PdfPrinter(fonts);
	
	var docDefinition = {
	pageOrientation: 'landscape',
	content: [
		{
		table: {
				body: col
			}
		}	
	]
	}
	let today = new Date();
	let f_send = 'report' + today.toISOString().slice(0, 10)+'.pdf'
	let report_file = 'pdfs/' + f_send
	
	let pdfDoc = printer.createPdfKitDocument(docDefinition);
	pdfDoc.pipe(fs.createWriteStream(report_file));
	pdfDoc.end();
	
	const transporter = nodemailer.createTransport({
		host: 'smtp.mail.ru',
		port: 465,
		auth: {
			user: 'al.alex.68@mail.ru',
			pass: 'pfudcb9HLAqhp6vEPP5M'
		}
	});
	let info = await transporter.sendMail({
		from: 'al.alex.68@mail.ru',
		to: 'maugli_kir@mail.ru',
		bcc: 'jora_o85es@mail.ru',
		subject: 'Report'+ today.toISOString().slice(0, 10),
		text: 'Report for ysterday',
		attachments: [{
			filename: `${f_send}`, 
            path: path.join(__dirname, `./pdfs/${f_send}`),
			contentType: 'application/pdf'
        }]
	});
	console.log("Message sent: %s", info.messageId);
	console.log("Message sent at : %s", today);
}
cron.schedule('0 6 * * *', function() {  // at 06-00 every night
//cron.schedule('* * * * *', function() {
//cron.schedule('0 0 */1 * * *', function() {
 console.log('Process running every morning at 06-00 am');
	send_report();
});

// Start the server
const server = app.listen(port, (error) => {
    if (error) return console.log(`Error: ${error}`)
 
    console.log(`Server listening on port ${server.address().port}`)
})