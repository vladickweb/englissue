const { Schema, model } = require('mongoose')

const messageSchema = new Schema(
	{
		sender: {
			type: Schema.Types.ObjectId,
			ref: 'User'
		},

		receiver: {
			type: Schema.Types.ObjectId,
			ref: 'User'
		},

		body: {
			type: String,
			required: true
		},
	},
	{ timestamps: true }
)

const ChatMessage = model('ChatMessage', messageSchema)

module.exports = ChatMessage
