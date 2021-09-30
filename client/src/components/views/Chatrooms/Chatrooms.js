import React, { Component } from 'react'
import ChatroomService from '../../services/ChatroomsService'
import { Link } from 'react-router-dom'

class Chatrooms extends Component {
	constructor() {
		super()

		this.state = {
			chatrooms: null
		}
		this.chatroomService = new ChatroomService()
	}

	componentDidMount() {
		this.refreshChatrooms()
	}

	refreshChatrooms = () => {
		this.chatroomService
			.getChatrooms()
			.then(res => {
				this.setState({
					...this.state,
					chatrooms: res.data
				})
			})
			.catch(err => console.error(err))
	}

	displayChatRooms = () => {
		return this.state.chatrooms.map(chatroom => {
			console.log(chatroom)
			return (
				<Link key={chatroom._id} to={`/salas-chat/${chatroom._id}`}>
					<h1>{chatroom.title}</h1>
				</Link>
			)
		})
	}

	render() {
		return this.state.chatrooms ? <div>{this.displayChatRooms()}</div> : <h3>Loading...</h3>
	}
}

export default Chatrooms
