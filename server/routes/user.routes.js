const express = require('express')
const { findById } = require('../models/User.model')
const User = require('../models/User.model')
const MessagesGroup = require('../models/MessagesGroup')
const router = express.Router()

router.get('/', (req, res) => {
	User.find()
		.then(users => res.status(200).json(users))
		.catch(err => res.status(500).json({ code: 500, message: 'Error retrieving Users', err }))
})

router.put('/update', (req, res) => {
	console.log(req.body.data)
	const { id, amount, teacher } = req.body.data

	User.findById(id)
		.then(user => {
			const currentAmount = user.balance
			User.findByIdAndUpdate(
				user.id,
				{ balance: currentAmount - amount, $push: { myClasses: teacher } },
				{ new: true }
			)
				.then(user => {
					req.session.currentUser = user
					res.status(200).json({ user })
				})
				.catch(err => res.status(500).json({ err }))
		})
		.catch(err => res.status(500).json({ err }))
})

router.put('/complete-profile', (req, res) => {
	const { _id } = req.session.currentUser
	const { name, rol, city, country, image, iban, price, description } = req.body.data
	let formatedPrice
	price ? (formatedPrice = price * 100) : (formatedPrice = 0)

	const direction = { city, country }

	User.findByIdAndUpdate(_id, { name, rol, direction, image, iban, price: formatedPrice, description }, { new: true })
		.then(user => {
			req.session.currentUser = user
			res.status(200).json({ user, message: 'user updated' })
		})
		.catch(err => res.status(500).json({ code: 500, message: 'Error updating user', err: err }))
})

router.put('/add-teacher/:id', (req, res) => {
	const { id } = req.params
	const { _id } = req.session.currentUser

	User.findByIdAndUpdate(id, { $push: { zlients: _id } }, { new: true })
		.populate('clients')
		.then(teacher => res.status(200).json({ teacher, message: 'created client succesfuly' }))
		.catch(err => res.status(500).json({ code: 500, message: 'error creating client', err: err }))
})

router.get('/my-classes', (req, res) => {
	const { _id } = req.session.currentUser

	User.findById(_id)
		.populate('myClasses')
		.then(a => {
			const classes = a.myClasses

			const result = classes.map(elm => {
				const tmp = classes.reduce((total, current) => {
					return elm._id === current._id ? total + 1 : total
				}, 0)
				return { ...elm._doc, cuantity: tmp }
			})

			const filteredArr = result.reduce((acc, current) => {
				const x = acc.find(item => item._id === current._id)
				if (!x) {
					return acc.concat([ current ])
				} else {
					return acc
				}
			}, [])
			res.status(200).json({ filteredArr, message: 'getted clients succesfuly' })
		})
		.catch(err => res.status(500).json({ code: 500, message: 'error getting khjgclients', err }))
})

router.post('/my-groups', (req, res) => {
	const { id } = req.body.data
	const { _id } = req.session.currentUser

	MessagesGroup.find({ users: id }, { users: _id })
		.populate({ path: 'messages', populate: { path: 'name' } })
		.then(group => res.status(200).json({ group }))
		.catch(err => res.status(500).json({ err }))
})

router.get('/people', (req, res) => {
	const city = req.session.currentUser.direction.city
	const id = req.session.currentUser._id
	console.log(req.session.currentUser, 'hhhhhhhhhhhhhhhhhey')

	User.find({ 'direction.city': city, rol: 'student', _id: { $ne: id } })
		.then(users => res.status(200).json({ users }))
		.catch(err => res.status(500).json({ err }))
})

router.get('/:id', (req, res) => {
	const { id } = req.params

	User.findById(id)
		.then(User => res.status(200).json({ User, message: 'User getted' }))
		.catch(err => res.status(500).json({ code: 500, message: 'Error retrieving a single User', err }))
})

module.exports = router
