import React, { Component } from 'react'
import { Container, Form, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import AuthService from '../../services/AuthService'
import GoogleAuth from '../GoogleAuth/GoogleAuth'
import './Auth.css'
import { AwesomeButton, AwesomeButtonProgress, AwesomeButtonSocial } from 'react-awesome-button'


class Login extends Component {
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
			.login(email, pwd)
			.then(res => {
				this.props.storeUser(res.data)
				res.data.rol === 'unknown' ? this.props.history.push('/completar-perfil') : this.props.history.push('/')
			})
			.catch(err => console.log(err))
	}

	render() {
		return (
			<div className='row justify-content-center margin-auth'>
				<div className='col-5 transparent p-5 radius text-white'>
					<form onSubmit={this.handleFormSubmit}>
						<h3>Iniciar sesión</h3>

						<div className='form-group mb-3'>
							<label>Email</label>
							<input
								autoComplete="off"
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

						{/* <button type='submit' className='btn btn-primary btn-block form-control my-4 color-guille'>
							Iniciar Sesión
						</button> */}
						<div className="row justify-content-center my-4">
					<AwesomeButton type="secondary">Iniciar Sesión</AwesomeButton>
						</div>


						<div className='d-flex justify-content-center mb-4'>
							<GoogleAuth storeUser={this.props.storeUser} {...this.props} />
						</div>

						<div className='d-flex justify-content-center'>
							<p className='forgot-password'>
								Tienes una &nbsp;
								<Link to='/registro'>cuenta</Link>
								?
							</p>
						</div>
					</form>
				</div>
			</div>

		
		)
	}
}

export default Login
