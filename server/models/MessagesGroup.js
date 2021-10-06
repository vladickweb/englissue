const { Schema, model } = require('mongoose')

const messagesGroupSchema = new Schema(
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
				ref: 'Message'
			}
		]
	},
	{ timestamps: true }
)

const MessagesGroup = model('MessagesGroup', messagesGroupSchema)

module.exports = MessagesGroup
