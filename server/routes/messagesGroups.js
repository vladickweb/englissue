const express = require('express')
const MessagesGroup = require('../models/MessagesGroup')
const User = require('../models/User.model')
const Message = require('../models/Message.model')
const router = express.Router()

router.get('/', (req, res) => {
	const { _id } = req.session.currentUser

	User.findById(_id).populate('messageGroups').then(user => console.log(user)).catch(err => console.log(err))
})

router.post('/create', (req, res) => {
	const { id } = req.body.data
	const {_id} = req.session.currentUser

	MessagesGroup.create({ users: [ id, _id ] })
		.then(group => res.status(200).json({ group }))
		.catch(err => res.status(200).json({ err }))
})

router.post('/message', (req, res) => {
	
	const { body, _id, idGroup } = req.body.data

	Message.create({ body, name: _id  })
		.then(message => {
			MessagesGroup.findByIdAndUpdate(idGroup, { $push: { messages: message._id } }, { new: true })
				.then(response => res.status(200).json({ response }))
				.catch(err => res.status(500).json({ err }))
		})
		.catch(err => res.status(500).json({ err }))
})

router.get('/get-my-groups', (req, res) => {
	const { _id } = req.session.currentUser
	// console.log(id)
	MessagesGroup.find({users: _id})
		.populate('users')
		.then(groups => res.status(200).json({groups}))
		.catch(err => res.status(500).json({err}))
})

module.exports = router
