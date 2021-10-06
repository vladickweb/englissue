import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import Navigation from './components/layout/Navigation'
import AuthService from './components/services/AuthService'
import Routes from './components/Routes/Routes'

export class App extends Component {
	constructor() {
		super()
		this.state = {
			loggedUser: undefined
		}
		this.authService = new AuthService()
	}

	componentDidMount = () => {
		this.fetchUser()
	}

	storeUser = user => this.setState({ loggedUser: user })

	fetchUser = () => {
		this.authService
			.isloggedin()
			.then(res => {
				this.storeUser(res.data)
			})
			.catch(err => this.storeUser(null))
	}



	render() {
		return (
			<div>
				<Navigation loggedUser={this.state.loggedUser} storeUser={this.storeUser} />
				<Routes storeUser={this.storeUser} fetchUser={this.fetchUser} loggedUser={this.state.loggedUser} />
			</div>
		)
	}
}

export default App
