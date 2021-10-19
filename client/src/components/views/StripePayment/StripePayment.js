import React, { useState, useEffect } from 'react'
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import CheckoutService from '../../services/CheckoutService'
import { AwesomeButton, AwesomeButtonProgress, AwesomeButtonSocial } from 'react-awesome-button'
import Swal from 'sweetalert2'

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

			if (!amount) {
				alert('selecciona la cantidad a ingresar')
			}

			const { error, paymentMethod } = await stripe.createPaymentMethod({
				type: 'card',
				card: elements.getElement(CardElement)
			})

			if (!error) {
				Swal.fire({
					position: 'top-end',
					icon: 'success',
					title: 'Pago completado',
					showConfirmButton: false,
					timer: 1500
				})
				const { id } = paymentMethod
				const { data } = await createCheckout.createCheckout(id, amount)

				props.fetchUser()
			} else {
				Swal.fire({
					icon: 'error',
					title: 'Oops...',
					text: error.message,
				})
			}
		}

		return (
			<div className='row justify-content-center'>
				<div className='col-6'>
					<form onSubmit={handleSubmit} className='form-group'>
						<CardElement className='form-control' />
						<AwesomeButton type='secondary'>Aceptar</AwesomeButton>
					</form>
				</div>
			</div>
		)
	}

	return (
		<div className='container margin-top'>
			<div className='row justify-content-center align-items-center transparent p-5 radius text-white'>
				<col-8>
					<h1 className='mb-5'>Pasarela de pago</h1>
					<div className='row justify-content-center text-center'>
						<div className='row mb-5'>
							<div className='col-md-4'>
								<AwesomeButton type='secondary' action={() => setAmount(1000)}>
									10€
								</AwesomeButton>
							</div>
							<div className='col-md-4'>
								<AwesomeButton type='secondary' action={() => setAmount(2500)}>
									25€
								</AwesomeButton>
							</div>
							<div className='col-md-4'>
								<AwesomeButton type='secondary' action={() => setAmount(5000)}>
									50€
								</AwesomeButton>
							</div>
						</div>

						{amount && <h3 className='mb-3 mt-3'>cantidad seleccionada: {amount / 100}€</h3>}
						<Elements stripe={stripePromise}>
							<CheckoutForm />
						</Elements>
						<div>
							<img
								height='150rem'
								className='mt-3'
								src='https://lapeorempresadelmundo.es/wp-content/uploads/2019/12/pagoseguro-stripe.png'
								alt='checkout'
							/>
						</div>
					</div>
				</col-8>
			</div>
		</div>
	)
}
