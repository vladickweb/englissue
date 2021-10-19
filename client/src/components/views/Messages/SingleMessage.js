import React, { Component } from 'react'
import UserService from '../../services/UserService'
import MessagesService from '../../services/MessagesService'
import { MdSend } from 'react-icons/md';


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
				console.log(e, 'data')
				e.data.group.length === 0
					? this.createMessageGroup()
					: this.setState({
							...this.state,
							messages: e.data.group[0].messages,
							idGroup: e.data.group[0]._id
						})
			})
			.catch(err => {
				console.log('holaaaaaaaaaaaaaaaaaaaaa')
				console.log(err)
			})
	}

	createMessageGroup() {
		const { id } = this.props.match.params
		const { _id } = this.props.loggedUser

	
		this.messagesService
			.createGroup({ id, _id })
			.then(() => {
			
				this.checkIfExistsGroup()
			})
			.catch(err => console.log(err))
	}

	displayMessages = () => {
		return this.state.messages.map(message => {
			
			return (

				<div key={message._id} className="m-5">
					<h5>{message.name.name}</h5>
					<p>{message.body}</p>
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
			<div className="margin-top">
			{this.state.messages &&
			<div className='margin-chat container'>
				<div className='row justify-content-center'>
					<div className='col-7 transparent chat radius text-white'>{this.displayMessages()}</div>
					<div className="col-7">
					<form className="form-group margin-negative" onSubmit={e => this.handleSubmit(e)}>
						<div className="d-flex">
						<input className="form-control text-white" autoComplete="off" onChange={this.handleChange} autoFocus="autofocus" type='text' name='body' />
						<button className="btn btn-success" type='submit'>
							<MdSend/>
						</button>
						</div>
					</form>
					</div>
				</div>
			</div>
			}
			</div>
			
		)
	}
}
