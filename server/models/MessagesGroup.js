const { Schema, model } = require('mongoose')

const MessagesGroup = new Schema(
	{
		users: [
			{
				type: Schema.Types.ObjectId,
				ref: 'User'
			}
		],
		
		messages: [
			{
				type: Schema.Types.ObjectId,
				ref: 'Messages'
			}
		]
	},
	{ timestamps: true }
)

const ChatMessage = model('ChatMessage', messageSchema)

module.exports = ChatMessage
