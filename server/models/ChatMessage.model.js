const { Schema, model } = require('mongoose')

const chatMessageSchema = new Schema(
	{
		name: {
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

const ChatMessage = model('ChatMessage', chatMessageSchema)

module.exports = ChatMessage
