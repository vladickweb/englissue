const express = require('express')
const User = require('../models/User.model')
const router = express.Router()

router.get('/', (req, res) => {
	User.find({ rol: 'teacher' })
		.then((users) => res.status(200).json(users))
		.catch((err) => res.status(500).json({ code: 500, message: 'Error retrieving Users', err }))
})

router.get('/:id', (req, res) => {
	const { id } = req.params
	User.findById(id)
		.then((user) => res.status(200).json({ user, message: 'User getted' }))
		.catch((err) => res.status(500).json({ code: 500, message: 'Error retrieving a single User', err }))
})

router.put('/update-profile', (req, res) => {
	const { _id } = req.session.currentUser

	User
		.findByIdAndUpdate(_id, req.body, {new: true})
		.then(user => res.status(200).json({ user, message: 'User updated'}))
		.catch(err => res.status(500).json({code: 500, message: 'Error updating user', err}))

})

module.exports = router
