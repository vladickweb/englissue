const express = require('express')
const router = express.Router()
const Stripe = require('stripe')
const User = require('../models/User.model')
const Payment = require('../models/Payment.model')

const stripe = new Stripe(
	'sk_test_51JeGZpKYMQZormJY9NiYMRBhEUInBhectMBVXehjoZkfmDkEBI99U8O4KbULshRzvVMwlCnyovDmsRLleT5VRxiC00VmcjT78r'
)

router.post('/', (req, res) => {
	const { amount, id } = req.body

	stripe.paymentIntents
		.create({
			amount,
			currency: 'USD',
			description: 'test',
			payment_method: id,
			confirm: true
		})
		.then(payment => {
			const { amount, id, description, statusMessage } = payment

			Payment.create({ amount, id, description, statusMessage })
				.then(payment => {

					console.log(payment);
					User.findById(req.session.currentUser)
						.then(user => {
							const totalAmount = user.balance + amount

							User.findByIdAndUpdate(
								req.session.currentUser._id,
								{ $push: { payments: payment._id }, balance: totalAmount },
								{ new: true }
							)
								.then(user => {
									req.session.currentUser = user
									res.status(200).json(user)
								})
								.catch(err => res.status(500).json({ Code: 500, err }))
						})
						.catch(err => res.status(500).json({ Code: 500, err }))
				})
				.catch(err => res.status(500).json({ message: 'failed to create payment in DB', err }))
		})
		.catch(err => res.status(500).json({ message: 'failed payment', err }))
})

module.exports = router
