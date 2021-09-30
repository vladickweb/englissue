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

	console.log('LKSDHJFLJKSDFHLIKDSFJKLDFSJDFKLS', req.session.currentUser)
	// console.log(req.body)

	stripe.paymentIntents
		.create({
			amount,
			currency: 'USD',
			description: 'test',
			payment_method: id,
			confirm: true
		})
		// .then(payment => res.status(200).json({ message: 'successfull payment', payment }))
		.then(payment => {
			// console.log(payment, 'SOY EL PAYMENT')

			const { amount, id, description, statusMessage } = payment

			Payment.create({ amount, id, description, statusMessage })
				.then(payment => {
					// User.find()
					// 	.then(users => console.log(users))
					// 	.then(() => console.log('asdfasdfasdfasdfasdf', req.session.currentUser))

					User.findByIdAndUpdate(
						req.session.currentUser._id,
						{ $push: { payments: payment._id } },
						{ new: true }
					)
						.then(response => console.log(response))
						.catch(err => console.log(err))
				})
				.catch(err => res.status(500).json({ message: 'failed to create payment in DB', err }))
		})
		.catch(err => res.status(500).json({ message: 'failed payment', err }))
})
// .then(algo => console.log(algo))
// .catch(err => console.log(err))

module.exports = router
