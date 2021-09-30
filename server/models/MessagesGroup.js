const { Schema, model } = require('mongoose')

const MessagesGroup = new Schema(
	{
		users: [
			{
				type: Schema.Types.ObjectId,
				ref: 'User'
			}
		]
	},
	{ timestamps: true }
)

const ChatMessage = model('ChatMessage', messageSchema)

module.exports = ChatMessage
