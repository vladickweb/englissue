import React, { Component } from 'react'
import UserService from '../../services/UserService'
import SingleUser from './SingleUser'

export default class People extends Component {
	constructor(props) {
		super(props)

		this.state = {
			people: null
		}

		this.userService = new UserService()
	}

	componentDidMount() {
		this.refreshPeople()
	}

	refreshPeople = () => {
		this.userService
			.getPeople()
			.then(people => {
				this.setState({
					...this.state,
					people: people.data.users
				})
			})
			.catch(err => console.error(err))
	}

	displayUsers = () => {
		return this.state.people.map(user => {
			return (
				<div key={user._id} className='col-md-4'>
					<SingleUser {...user}/>
				</div>
			)
		})
	}

	render() {
		return (
			<div>
				{this.state.people && this.displayUsers()}
				<h1>people</h1>
			</div>
		)
	}
}
