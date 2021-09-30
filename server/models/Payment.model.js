const { Schema, model } = require('mongoose')

const paymentSchema = new Schema(
	{
		amount: {
			type: Number,
			// required: true
		},

		description: {
			type: String
		},

		id: {
			type: String
		},

		statusMessage: {
			type: String
		}
	},
	{
		timestamps: true
	}
)

const Payment = model('Payment', paymentSchema)

module.exports = Payment
