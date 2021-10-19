import React, { Component } from 'react'
import CheckoutService from '../../services/CheckoutService'
import UserService from '../../services/UserService'
import { AwesomeButton, AwesomeButtonProgress, AwesomeButtonSocial } from 'react-awesome-button'
import Swal from 'sweetalert2'

export default class ChekoutTeacher extends Component {
	constructor(props) {
		super(props)
		this.state = {
			teacher: null,
			balance: null
		}
		this.userService = new UserService()
	}

	componentDidMount() {
		this.refreshTeacher()
		this.getCurrentBalance()
	}

	getCurrentBalance() {
		this.userService
			.getSingleUser(this.props.loggedUser._id)
			.then(user => {
				this.setState({
					...this.state,
					balance: user.data.User.balance
				})
			})
			.catch(err => console.log(err))
	}

	refreshTeacher() {
		this.userService
			.getSingleUser(this.props.match.params.id)
			.then(teacher => {
				this.setState({
					...this.state,
					teacher: teacher.data.User
				})
			})
			.catch(err => console.log(err))
	}

	checkout() {
		const currentUser = this.props.loggedUser._id

		if (this.state.balance > this.state.teacher.price) {
			this.userService
				.updateUser({ id: currentUser, amount: this.state.teacher.price, teacher: this.props.match.params.id })
				.then(() => {
					console.log(this.props)
					this.props.fetchUser()
					this.getCurrentBalance()
				})
				.catch(err => console.log(err))
		} else {
			Swal.fire({
				icon: 'error',
				title: 'Error...',
				text: 'No hemos podido detectar tu ubicación, por favor introduce tu ciudad.'
			})

			this.props.history.push('/recargar-cuenta')
		}
	}

	displayTeacher() {
		return this.state.teacher ? (
			<div className='row align-items-center justify-content-between'>
				<div className='col-6 '>
					<img src={this.state.teacher.image} className='image-card' alt='' />
				</div>
				<div className='ml-4 col-6 text-white'>
					<h1>{this.state.teacher.name}</h1>
					<h3>{this.state.teacher.description}</h3>
				</div>
				<AwesomeButton
					className='mt-5'
					type='secondary'
					onClick={console.log('funcionooo')}
					action={() => this.checkout()}
				>
					Reserva una hora con {this.state.teacher.name} por solo {this.state.teacher.price / 100}e.
				</AwesomeButton>
			</div>
		) : (
			<h1>cargando...</h1>
		)
	}

	render() {
		return (
			<div className='container'>
				<div className='row justify-content-center margin-top transparent radius p-5'>
					<div className='col-md-7'>{this.displayTeacher()}</div>
				</div>
			</div>
		)
	}
}
