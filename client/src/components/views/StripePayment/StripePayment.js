import React, { useState, useEffect } from 'react'
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import CheckoutService from '../../services/CheckoutService'

export default function StripePayment(props) {
	const createCheckout = new CheckoutService()
	const [ amount, setAmount ] = useState()

	const stripePromise = loadStripe(process.env.REACT_APP_BASE_URL_API_STRIPE)

	console.log(props)

	const CheckoutForm = () => {
		const stripe = useStripe()
		const elements = useElements()

		const handleSubmit = async e => {
			e.preventDefault()

			if (!amount){
				alert('selecciona la cantidad a ingresar')
			}

			const { error, paymentMethod } = await stripe.createPaymentMethod({
				type: 'card',
				card: elements.getElement(CardElement)
			})

		

			if (!error) {
				const { id } = paymentMethod
				const { data } = await createCheckout.createCheckout(id, amount)
				
				props.fetchUser()
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
						<button className='btn btn-success btn-block'>Aceptar</button>
					</form>
				</div>
			</div>
		)
	}

	return (
		<div>
			<h1>Pasarela de pago</h1>
			<div className='row justify-content-center text-center'>
				<div className='col-md-4'>
					<button className='btn-lg p-2 btn-danger' onClick={() => setAmount(1000)}>
						10€
					</button>
				</div>
				<div className='col-md-4'>
					<button className='btn-lg p-2 btn-danger' onClick={() => setAmount(2500)}>
						25€
					</button>
				</div>
				<div className='col-md-4'>
					<button className='btn-lg p-2 btn-danger' onClick={() => setAmount(5000)}>
						50€
					</button>
				</div>
			</div>

			{amount && <h3>cantidad seleccionada: {amount/100}</h3> }

			<Elements stripe={stripePromise}>
				<CheckoutForm />
			</Elements>
		</div>
	)
}
