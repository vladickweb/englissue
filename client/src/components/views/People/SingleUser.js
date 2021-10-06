import React from 'react'

import { Link } from 'react-router-dom'

export default function SingleUser({ _id, price, image, description, name }) {
	return (
		<div className='card mb-5'>
			<img className='card-img-top' style={{ backgroundSize: 'cover' }} src={image} alt='Card cap' />
			
			<div className='card-body'>
				<h5 className="card-title">{name}</h5>
				<p className='card-text'>{description}</p>
				<Link to={`/mis-mensajes/${_id}`}>
					<div className='btn btn-block btn-dark'>Enviar mensaje</div>
				</Link>
			</div>
		</div>
	)
}
