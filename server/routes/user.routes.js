const express = require('express')
const User = require('../models/User.model')
const router = express.Router()

router.get('/', (req, res) => {
	User.find()
		.then((users) => res.status(200).json(users))
		.catch((err) => res.status(500).json({ code: 500, message: 'Error retrieving Users', err }))
})

router.get('/:id', (req, res) => {
	const { id } = req.params

	User.findById(id)
		.then((User) => res.status(200).json({ User, message: 'User getted' }))
		.catch((err) => res.status(500).json({ code: 500, message: 'Error retrieving a single User', err }))
})

router.put('/complete-profile', (req, res) => {
	const { _id } = req.session.currentUser
	const {name, rol, city, country, image, iban} = req.body.data
	const direction = {city, country}

	User.findByIdAndUpdate(_id, {name, rol, direction, image, iban }, { new: true })
		.then((user) => res.status(200).json({ user, message: 'user updated' }))
		.catch((err) => res.status(500).json({ code: 500, message: 'Error updating user', err: err }))
})

router.put('/add-teacher/:id', (req, res) => {
	const { id } = req.params
	const { _id } = req.session.currentUser

	User.findByIdAndUpdate(id, { $push: { zlients: _id } }, { new: true })
		.populate('clients')
		.then((teacher) => res.status(200).json({ teacher, message: 'created client succesfuly' }))
		.catch((err) => res.status(500).json({ code: 500, message: 'error creating client', err: err }))
})

router.get('/get/clients', (req, res) => {
	const { _id } = req.session.currentUser

	User.findById(_id)
		.populate('clients')
		.then((teacher) => res.status(200).json({ teacher, message: 'getted clients succesfuly' }))
		.catch((err) => res.status(500).json({ code: 500, message: 'error getting clients', err: err }))
})
module.exports = router
