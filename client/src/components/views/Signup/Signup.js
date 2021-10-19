import React, { Component } from 'react'
import { Container, Form, Button } from 'react-bootstrap'
import AuthService from '../../services/AuthService'
import GoogleAuth from '../GoogleAuth/GoogleAuth'
import { Link } from 'react-router-dom'
import { AwesomeButton, AwesomeButtonProgress, AwesomeButtonSocial } from 'react-awesome-button'

class Signup extends Component {
	constructor(props) {
		super(props)
		this.state = {
			email: '',
			pwd: ''
		}
		this.authService = new AuthService()
	}

	handleInput = e => {
		const { name, value } = e.target
		this.setState({ [name]: value })
	}

	handleFormSubmit = e => {
		e.preventDefault()
		const { email, pwd } = this.state
		this.authService
			.signup(email, pwd)
			.then(res => {
				this.props.storeUser(res.data)
				console.log(res, 'ssssssssssssssssssssssss')
				res.data.rol === 'unknown' ? this.props.history.push('/completar-perfil') : this.props.history.push('/')
			})
			.catch(err => console.log(err))
	}

	render() {
		return (
			<div className='row justify-content-center margin-auth'>
				<div className='col-5 transparent p-5 radius text-white'>
					<form onSubmit={this.handleFormSubmit}>
						<h3>Registro</h3>

						<div className='form-group mb-3'>
							<label>Email</label>
							<input
								autoComplete='off'
								type='email'
								name='email'
								value={this.state.email}
								onChange={this.handleInput}
								className='form-control text-white'
								placeholder='Introduce tu email'
							/>
						</div>

						<div className='form-group'>
							<label>Contraseña</label>
							<input
								type='password'
								name='pwd'
								value={this.state.pwd}
								onChange={this.handleInput}
								className='form-control text-white'
								placeholder='Enter password'
							/>
						</div>
						<div className='row justify-content-center my-4'>
							<AwesomeButton type='secondary'>
								Registrarse
							</AwesomeButton>
						</div>

						<div className='d-flex justify-content-center mb-4'>
							<GoogleAuth storeUser={this.props.storeUser} {...this.props} />
						</div>

						<div className='d-flex justify-content-center'>
							<p className='forgot-password'>
								Tienes cuenta? Haz click &nbsp;
								<Link to='/registro'>aquí</Link>
							</p>
						</div>
					</form>
				</div>
			</div>
		)
	}
}

export default Signup
