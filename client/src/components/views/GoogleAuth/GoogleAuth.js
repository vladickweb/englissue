import React, { Component } from 'react'
import GoogleLogin from 'react-google-login'
import AuthService from '../../services/AuthService'
import { AwesomeButton, AwesomeButtonProgress, AwesomeButtonSocial } from 'react-awesome-button'

export class GoogleAuth extends Component {
	constructor(props) {
		super(props)

		this.authService = new AuthService()
	}

	responseGoogle = res => {
		this.authService
			.google(res.profileObj)
			.then(res => {
				this.props.storeUser(res.data)
				res.data.rol === 'unknown' ? this.props.history.push('/completar-perfil') : this.props.history.push('/')
			})
			.catch(err => console.log(err))
	}

	render() {
		return (
			<div>
				{/* <AwesomeButton type='primary' onClick={() => GoogleLogin()}> */}
					<GoogleLogin
						
  					 
						className=''
						clientId={process.env.REACT_APP_BASE_URL_GOOGLE_LOGIN}
						buttonText='Entra con Google'
						style={{ display: 'none' }}
						onSuccess={this.responseGoogle}
						onFailure={this.responseGoogle}
						cookiePolicy='single_host_origin'
					/>
				{/* </AwesomeButton> */}
			</div>
		)
	}
}

export default GoogleAuth
