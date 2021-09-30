const mongoose = require('mongoose')
const Schema = mongoose.Schema

const chatRoomSchema = new Schema(
	{
		title: {
			type: String,
			required: true
		},
		
		users: [
			{
				type: Schema.Types.ObjectId,
				ref: 'User'
			}
		],

		messages: [
			{
				type: Schema.Types.ObjectId,
				ref: 'ChatMessage'
			}
		]
	},
	{
		timestamps: true
	}
)

const ChatRoom = mongoose.model('ChatRoom', chatRoomSchema)

module.exports = ChatRoom
