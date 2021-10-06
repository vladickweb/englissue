import React, { Component } from 'react'
import ChatMessageService from '../../services/ChatMessageService'
import ChatroomService from '../../services/ChatroomsService'

export default class SingleChatroom extends Component {
	constructor(props) {
		super(props)

		this.interval = ''

		this.state = {
			numberOfMessages: '0',
			users: null,
			messages: [
				{
					email: '',
					body: ''
				}
			],
			body: ''
		}
		this.chatroomService = new ChatroomService()
		this.chatMessageService = new ChatMessageService()
	}

	componentDidMount() {
		this.refreshMessages()
		this.handleCheckMessages()
	}

	componentWillUnmount() {
		clearInterval(this.interval)
	}

	refreshMessages = () => {
		const { id } = this.props.match.params
		console.log(id, 'wooooooooooooooooooooooooooow')

		this.chatroomService
			.getOneChatroom(id)
			.then(res => {
				const arrTemporal = res.data.messages.map(message => {
					const { email } = message.name
					const { body } = message
					const msg = { email, body }
					return msg
				})

				this.setState({
					...this.state,
					messages: [ ...arrTemporal ]
				})
			})
			.catch(err => console.log(err))
	}

	displayMessages = () => {
		return this.state.messages.map((elm, idx) => {
			return (
				<div key={idx}>
					<h1>{elm.email}</h1>
					<h2>{elm.body}</h2>
				</div>
			)
		})
	}

	handleChange = e => {
		const { value, name } = e.target

		this.setState({
			...this.state,
			[name]: value
		})
	}

	handleSubmit = e => {
		e.preventDefault()
		console.log('he entrado')
		const body = this.state.body
		const { id } = this.props.match.params

		this.chatMessageService
			.createMessage({ body, id })
			.then(() => {
				this.refreshMessages()
				this.setState({
					...this.state,
					body: ''
				})
			})
			.catch(err => console.log(err))
	}

	handleCheckMessages = () => {
		this.interval = setInterval(() => {
			const { id } = this.props.match.params

			this.chatMessageService
				.checkNewMessages(id)
				.then(numberOfMessagesFromDB => {
					console.log(numberOfMessagesFromDB)
					this.state.numberOfMessages !== numberOfMessagesFromDB.data.numberOfMessagesFromDB &&
						this.setState(
							{
								...this.state,
								numberOfMessages: numberOfMessagesFromDB.data.numberOfMessagesFromDB
							},
							this.refreshMessages()
						)
				})
				.catch(err => console.log(err))
		}, 1000)
	}

	render() {
		return this.state.messages ? (
			<div>
				{this.displayMessages()}
				<form onSubmit={e => this.handleSubmit(e)}>
					<input onChange={this.handleChange} type='text' name='body' />
					<button type='submit'>enviar</button>
				</form>
			</div>
		) : (
			<div>loading</div>
		)
	}
}
