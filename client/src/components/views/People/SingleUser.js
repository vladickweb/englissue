import React from 'react'
import { AwesomeButton, AwesomeButtonProgress, AwesomeButtonSocial } from 'react-awesome-button'

import { Link } from 'react-router-dom'

export default function SingleUser({ _id, price, image, description, name }) {
	return (
	<div className='card transparent radius text-white mb-5 ' style={{ height: '35rem' }}>
			<div className='h3 text-center mt-3'>{name}</div>
			<div className='row justify-content-center'>
				<img className='card-img-top image-card' style={{ objectFit: 'cover' }} src={image} alt='Card cap' />
			</div>

			<div className='card-body text-center'>
			<div className="mt-5">
				<Link to={`/mis-mensajes/${_id}`}>
				<AwesomeButton type="secondary">
				Enviar mensaje
				</AwesomeButton>
			</Link>
			</div>
			</div>
		</div>



		// <div className='card mb-5'>
		// 	<img className='card-img-top' style={{ backgroundSize: 'cover' }} src={image} alt='Card cap' />
			
		// 	<div className='card-body'>
		// 		<h5 className="card-title">{name}</h5>
		// 		<p className='card-text'>{description}</p>
		// 		<Link to={`/mis-mensajes/${_id}`}>
		// 			<div className='btn btn-block btn-dark'>Enviar mensaje</div>
		// 		</Link>
		// 	</div>
		// </div>
	)
}
