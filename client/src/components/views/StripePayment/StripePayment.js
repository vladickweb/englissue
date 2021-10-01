import React from 'react'
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import CheckoutService from '../../services/CheckoutService'

export default function StripePayment() {
	const createCheckout = new CheckoutService()

	const stripePromise = loadStripe(process.env.REACT_APP_BASE_URL_API_STRIPE)

	const CheckoutForm = () => {
		const stripe = useStripe()
		const elements = useElements()

		const handleSubmit = async e => {
			e.preventDefault()

			const { error, paymentMethod } = await stripe.createPaymentMethod({
				type: 'card',
				card: elements.getElement(CardElement)
			})

			if (!error) {
				const { id } = paymentMethod
				const { data } = await createCheckout.createCheckout(id, 5000)

				console.log(data)
			} else {
				console.log(error)
			}
		}

		return (
			<div className='row justify-content-center'>
				<div className='col-6'>
					<form onSubmit={handleSubmit} className='form-group'>
						<h2>mi form</h2>
						<CardElement className='form-control' />
						<button className='btn btn-success btn-block'>Comprar</button>
					</form>
				</div>
			</div>
		)
	}

	return (
		<div>
			<h1>Pasarela de pago</h1>
			<Elements stripe={stripePromise}>
				<CheckoutForm />
			</Elements>
		</div>
	)
}
