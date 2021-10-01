import React from 'react'
import Form from 'react-bootstrap/Form'
import { usePlacesWidget } from 'react-google-autocomplete'
import './AutocompleteGoogle.css'

export default function AutocompleteGoogle(props) {
	const { ref: bootstrapRef } = usePlacesWidget({
		apiKey: process.env.REACT_APP_BASE_URL_GOOGLE,
		onPlaceSelected: place => {
			const city = place.address_components[0].long_name
			const country = place.address_components[3].long_name
			props.handleChangeDirection(city, country)
		}
	})

	return (
		<div>
			<Form.Group>
				<Form.Label style={{ color: 'black' }}>Selecciona tu ubicación</Form.Label>
				<Form.Control style={{ zIndex: 99999 }} type='text' ref={bootstrapRef} />
			</Form.Group>
		</div>
	)
}
