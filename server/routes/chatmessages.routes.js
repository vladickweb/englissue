const express = require('express')
const router = express.Router()
const ChatRoom = require('../models/ChatRoom.model')
const ChatMessage = require('../models/ChatMessage.model')

router.post('/:id', (req, res) => {
	const chatRoomId = req.params.id
	const userId = req.session.currentUser._id
	const { body } = req.body

	ChatMessage.create({ name: userId, body })
		.then(message => {
			ChatRoom.findByIdAndUpdate(chatRoomId, { $push: { messages: message._id } })
				.then(chatRoom => res.status(200).json({ chatRoom }))
				.catch(err => res.status(500).json({ Code: 500, Message: 'Errorrrr', err: err }))
		})
		.catch(err => res.status(500).json({ Code: 500, err }))
})

module.exports = router
