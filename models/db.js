var mongoose = require( 'mongoose' );

var dbURI = 'mongodb://localhost/inventory';
mongoose.connect(dbURI);

mongoose.connection.on('connected', function () {
console.log('Mongoose connected to ' + dbURI);
});
mongoose.connection.on('error',function (err) {
console.log('Mongoose connection error: ' + err);
});


//create schema for mongoose
var InventorySchema = mongoose.Schema({
	product: {
		type: String,
		index:true,
		required: true
	},
	price: {
		type: String,
		required: true
	},
	quantity: {
		type: String,
		required: true
	},
	description: {
		type: String,
		required: true
	},
	date: {
		type: String,
		required: true
	}
});

var Inventory  = mongoose.model('Inventory', InventorySchema);

module.exports = Inventory; 


//config variable for heroku: saleskb
//mongodb://heroku_xj9150l1:pkbk26uiqi2a3m9tbga0a8ngto@ds141082.mlab.com:41082/heroku_xj9150l1


//mongodb://lee:lee@ds135552.mlab.com:35552/kb