import React, { Component } from 'react'
import { Container, Form, Button } from 'react-bootstrap'
import AuthService from '../../services/AuthService'
import GoogleAuth from '../GoogleAuth/GoogleAuth'

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
			<Container>
				<Form onSubmit={this.handleFormSubmit}>
					<Form.Group className='mb-3' controlId='formBasicEmail'>
						<Form.Label>Email</Form.Label>
						<Form.Control
							name='email'
							value={this.state.email}
							onChange={this.handleInput}
							type='email'
							placeholder='Enter email'
						/>
					</Form.Group>

					<Form.Group className='mb-3' controlId='formBasicPassword'>
						<Form.Label>Password</Form.Label>
						<Form.Control
							name='pwd'
							value={this.state.pwd}
							onChange={this.handleInput}
							type='password'
							placeholder='Password'
						/>
					</Form.Group>

					<Button variant='primary' type='submit'>
						Submit
					</Button>
				</Form>
				<GoogleAuth storeUser={this.props.storeUser} {...this.props}/>
			</Container>
		)
	}
}

export default Login
