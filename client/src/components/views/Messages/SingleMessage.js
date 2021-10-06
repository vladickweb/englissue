import React, { Component } from 'react'
import UserService from '../../services/UserService'
import MessagesService from '../../services/MessagesService'

export default class SingleMessage extends Component {
	constructor(props) {
		super(props)

		this.state = {
			idGroup: null,
			messages: null,
			body: null
		}

		this.userService = new UserService()
		this.messagesService = new MessagesService()
	}

	componentDidMount() {
		this.checkIfExistsGroup()
	}

	checkIfExistsGroup() {
		const id = this.props.match.params.id
		const _id = this.props.loggedUser?._id

		this.userService
			.getMyGroups({ id, _id })
			.then(e => {
				e.data.group.length === 0
					? this.createMessageGroup()
					: this.setState({
							...this.state,
							messages: e.data.group[0].messages,
							idGroup: e.data.group[0]._id
						})
			})
			.catch(err => {
				console.log(err)
			})
	}

	createMessageGroup() {
		const { id } = this.props.match.params
		const { _id } = this.props.loggedUser

		console.log(id, _id)
		this.messagesService
			.createGroup({ id, _id })
			.then(() => {
				console.log('grupo creado')
				this.checkIfExistsGroup()
			})
			.catch(err => console.log(err))
	}

	displayMessages = () => {
		return this.state.messages.map(message => {
			console.log(message)
			return (
				<div key={message._id} className='row'>
					<h1>{message.name.name}</h1>
					<h3>{message.body}</h3>
				</div>
			)
		})
	}

	handleSubmit = e => {
		e.preventDefault()
		const { body, idGroup } = this.state
		const { _id } = this.props.loggedUser
		const form = document.querySelector('#form')

		this.messagesService
			.createMessage({ body, _id, idGroup })
			.then(() => {
				this.checkIfExistsGroup()
				this.setState({
					...this.state,
					body: ''
				}, form.reset())
			})
			.catch(err => console.log(err))
	}

	handleChange = e => {
		const { value, name } = e.target

		this.setState({
			...this.state,
			[name]: value
		})
	}

	render() {
		return (
			<div>
				{this.state.messages ? this.displayMessages() : console.log('no hay mensajes')}
				<form id="form" onSubmit={e => this.handleSubmit(e)}>
					<input onChange={this.handleChange} type='text' name='body' />
					<button type='submit'>enviar</button>
				</form>
			</div>
		)
	}
}
