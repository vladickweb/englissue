const express = require('express')
const router = express.Router()
const User = require('./../models/User.model')
const bcrypt = require('bcrypt')
const bcryptSalt = 10

router.post('/signup', (req, res) => {
	const { email, pwd } = req.body

	User.findOne({ email })
		.then(user => {
			if (user) {
				res.status(400).json({ code: 400, message: 'Usuario existente' })
				return
			}

			const salt = bcrypt.genSaltSync(bcryptSalt)
			const hashPass = bcrypt.hashSync(pwd, salt)

			User.create({ password: hashPass, email })
				.then(() => {
					req.session.currentUser = user
					res.json({ code: 200, message: 'Usuario creado' })
				})
				.catch(err =>
					res.status(500).json({ code: 500, message: 'DB error while creating user', err: err.message })
				)
		})
		.catch(err => res.status(500).json({ code: 500, message: 'DB error while fetching user', err: err.message }))
})

router.post('/login', (req, res) => {
	const { email, pwd } = req.body

	console.log(req.body)

	User.findOne({ email })
		.then(user => {
			if (!user) {
				res.status(401).json({ code: 401, message: 'Usuario no registrado' })
				return
			}

			if (bcrypt.compareSync(pwd, user.password) === false) {
				res.status(401).json({ code: 401, message: 'Contraseña incorrecta' })
				return
			}

			req.session.currentUser = user
			res.json(req.session.currentUser)
		})
		.catch(err => res.status(500).json({ code: 500, message: 'DB error while fetching user', err: err.message }))
})

router.post('/google', (req, res) => {
	const { googleId, imageUrl, name, email } = req.body.data

	User.findOne({ googleId })
		.then(user => {
			if (!user) {
				User.create({ googleId, imageUrl, name, email })
					.then(user => {
						req.session.currentUser = user
						res.json(req.session.currentUser)
					})
					.catch(err => res.status(500).json({ code: 500, message: 'error creating user', err }))
			} else {
				req.session.currentUser = user
				res.json(req.session.currentUser)
			}
		})
		.catch(err => res.status(500).json({ Message: 'Error with google', err: err }))
})

router.get('/logout', (req, res) => {
	req.session.destroy(err => res.json({ message: 'Cierre de sesión con éxito' }))
})

router.post('/isloggedin', (req, res) => {
	req.session.currentUser
		? res.json(req.session.currentUser)
		: res.status(401).json({ code: 401, message: 'Desautorizado' })
})

module.exports = router
