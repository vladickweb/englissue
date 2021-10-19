import React, { Component } from 'react'
import ChatMessageService from '../../services/ChatMessageService'
import ChatroomService from '../../services/ChatroomsService'
import { MdSend } from 'react-icons/md';

export default class SingleChatroom extends Component {
	constructor(props) {
		super(props)

		this.interval = ''

		this.state = {
			numberOfMessages: '0',
			users: null,
			messages: [
				{
					name: '',
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

		this.chatroomService
			.getOneChatroom(id)
			.then(res => {
				const arrTemporal = res.data.messages.map(message => {
					const { name } = message.name
					const { body } = message
					const msg = { name, body }
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
				<div className="m-5" key={idx}>
					<h5>{elm.name}</h5>
					<p>{elm.body}</p>
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
			<div className='margin-top container'>
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
		) : (
			<div>loading</div>
		)
	}
}
