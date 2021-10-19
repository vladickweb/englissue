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
			return (
				<div className='col-4 py-5 h-auto'>
					<div className='row justify-content-center'>
						<div className='row rounded-circle hw align-items-center bg-white image-rooms link'>
							<Link
								key={chatroom._id}
								to={`/salas-chat/${chatroom._id}`}
								className='text-decoration-none text-dark'
							>
								<h1>{chatroom.title}</h1>
							</Link>
						</div>
					</div>
				</div>
			)
		})
	}

	render() {
		return this.state.chatrooms ? (
			<div className='container transparent margin-top radius'>
					<div className='row justify-content-center align-items-center text-center'>
						<div className="col-12 text-white mt-5">
							<h1>Salas de Chat</h1>
						</div>
						{this.displayChatRooms()}
					</div>
			</div>
		) : (
			<h3>Loading...</h3>
		)
	}
}

export default Chatrooms
