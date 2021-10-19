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
				<div key={user._id} className='col-4'>
					<SingleUser {...user} />
				</div>
			)
		})
	}

	render() {
		return (
			<div className='margin-chat'>
				<div className='container p-5'>
					{this.state.people ? (
						<div>
							<div className='row justify-content-center text-center'>
								{this.props.loggedUser && (
									<div className='col-8 mb-5 h1 transparent radius text-white'>
										Englissuers por {this.props.loggedUser.direction.city}
									</div>
								)}
							</div>
							<div className='row justify-content-around'>{this.state.people && this.displayUsers()}</div>
						</div>
					) : (
						<h1>No hay Englissuers cerca de tu ubicación :(</h1>
					)}
				</div>
			</div>
		)
	}
}
