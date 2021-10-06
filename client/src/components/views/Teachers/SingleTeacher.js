import React from 'react'

import { Link } from 'react-router-dom'

export default function SingleTeacher({ _id, price, image, description, name }) {
	return (
		<div className='card mb-5'>
			<img className='card-img-top' style={{ backgroundSize: 'cover' }} src={image} alt='Card cap' />
			
			<div className='card-body'>
				<h5 className="card-title">{name}</h5>
				<p className='card-text'>{description}</p>
				<Link to={`/profesores/${_id}`} props={(_id, price, image, description)}>
					<div className='btn btn-block btn-dark'>{price / 100} euros/hora</div>
				</Link>
				<Link to={`/profesores/${_id}`}>
					<div className='btn btn-block btn-dark'>Enviar mensaje</div>
				</Link>
			</div>
		</div>
	)
}
