import React, { Component } from 'react'
import ChatroomService from '../../services/ChatroomsService'

export default class SingleChatroom extends Component {
	constructor(props) {
		super(props)
		this.state = {
			users: null,
			messages: [
				{
					email: '',
					body: ''
				}
			]
		}
		this.chatroomService = new ChatroomService()
	}

	componentDidMount() {
		this.refreshMessages()
	}

	refreshMessages = () => {
		this.chatroomService
			.getOneChatroom(this.props.match.params.id)
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
		this.state.messages.map(elm => {
			return (
				<div>
					<h1>{elm.email}</h1>
					<h2>{elm.body}</h2>
				</div>
			)
		})
	}

	render() {
		console.log(this.state)
		return this.state.messages ? <div>{this.displayMessages()}</div> : <div>loading</div>
	}
	// render(){
	//     return (
	//         <div>hola</div>
	//     )
	// }
}
