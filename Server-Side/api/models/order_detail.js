var mongoose = require('mongoose');
var Schema = mongoose.Schema;

module.exports = mongoose.model('order_details', {	
	orderId: Schema.Types.ObjectId,
	productId: Schema.Types.ObjectId,
	quantity: Number,	
	unitPrice: Number
});