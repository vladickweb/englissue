import React from 'react'
import { AwesomeButton, AwesomeButtonProgress, AwesomeButtonSocial } from 'react-awesome-button'
import "react-awesome-button/dist/styles.css";

import { Link } from 'react-router-dom'

export default function SingleTeacher({ _id, price, image, description, name }) {

	


	return (
		<div className='card transparent radius text-white mb-5 ' style={{ height: '35rem' }}>
			<div className='h3 text-center mt-3'>{name}</div>
			<div className='row justify-content-center'>
				<img className='card-img-top image-card' style={{ objectFit: 'cover' }} src={image} alt='Card cap' />
			</div>

			<div className='card-body text-center'>
				<p className='card-text'>{description}</p>
			<div className="mt-5">
				<Link to={`/profesores/${_id}`} props={(_id, price, image, description)}>
					<AwesomeButton type="secondary">{price / 100} euros/hora</AwesomeButton>
				</Link>
			</div>
			</div>
		</div>
	)
}
