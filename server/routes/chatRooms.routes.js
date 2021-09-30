const express = require('express')
const ChatRoom = require('../models/ChatRoom.model')
const router = express.Router()

router.get('/', (req, res) => {
	ChatRoom.find()
		.then(chatroom => res.status(200).json(chatroom))
		.catch(err => res.status(500).json({ code: 500, message: 'Error retrieving Chatrooms', err }))
})

router.post('/', (req, res) => {
	ChatRoom.create(req.body)
		.then(chatroom => res.status(200).json({ chatroom }))
		.catch(err => res.status(500).json({ Code: 500, Message: 'Error creating Chatroom', err: err }))
})

router.get('/:id', (req, res) => {
	const { _id } = req.session.currentUser
	const { id } = req.params

	ChatRoom.findByIdAndUpdate(id, { $push: { users: _id } }, { new: true })
		.populate({
			path: 'messages',
			populate: { path: 'name' }
		})
		.then(chatroom => res.status(200).json(chatroom))
		.catch(err => res.status(500).json({ Code: 500, Message: 'Error retrieving Chatroom', err: err }))
})

module.exports = router
