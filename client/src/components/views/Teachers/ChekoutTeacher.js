import React, { Component } from 'react'
import CheckoutService from '../../services/CheckoutService'
import UserService from '../../services/UserService'

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

	getCurrentBalance(){
		this.userService.getSingleUser(this.props.loggedUser._id)
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


		if (this.state.balance > this.state.teacher.price){
		this.userService
			.updateUser({ id: currentUser, amount: this.state.teacher.price, teacher: this.props.match.params.id })
			.then(() => {
                console.log(this.props)
				this.props.fetchUser()
				this.getCurrentBalance()
			})
			.catch(err => console.log(err))
		} else{
			alert('Saldo insuficiente')
			console.log(this.props.history.push('/recargar-cuenta'))
		}
	}

	displayTeacher() {
		return this.state.teacher ? (
			<div className='row'>
				<div className='col-6'>
					<img src={this.state.teacher.image} width='100%' alt='' />
				</div>
				<div className='col-6'>
					<h1>{this.state.teacher.name}</h1>
					<h3>{this.state.teacher.description}</h3>
				</div>
				<button onClick={() => this.checkout()} className='btn btn-dark btn-block'>
					Reserva una hora con {this.state.teacher.name} por solo {this.state.teacher.price / 100}e.
				</button>
			</div>
		) : (
			<h1>cargando...</h1>
		)
	}

	render() {
		return (
			<div className='row justify-content-center'>
				<div className='col-md-7'>{this.displayTeacher()}</div>
			</div>
		)
	}
}
