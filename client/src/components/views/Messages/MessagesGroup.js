import React, { Component } from 'react'
import { Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import MessagesService from '../../services/MessagesService'
import { MdSend } from 'react-icons/md'

class MessagesGroup extends Component {
	constructor(props) {
		super(props)

		this.state = {
			groups: null
		}

		this.messageService = new MessagesService()
	}

	componentDidMount() {
		this.refreshGroups()
	}

	refreshGroups = () => {
		this.messageService
			.getMyGroups()
			.then(res => {
				this.setState({
					...this.state,
					groups: res.data.groups
				})
			})
			.catch(err => console.log(err))
	}

	displayGroups = () => {
		return this.state.groups.map(group => {
			const ids = []
			ids.push(group.users[0]._id)
			ids.push(group.users[1]._id)

			const myId = this.props.loggedUser._id

			const result = ids.filter((id, idx) => id !== myId)
			return (
				<div className='row align-items-center justify-content-center mb-3'>
					<div className='col-10'>
						<h3 className='text-white'>
							{group.users[0].name} con {group.users[1].name}
						</h3>
					</div>
					<div className='col-2'>
						<Link className='text-decoration-none' to={`/mis-mensajes/${result[0]}`}>
							<MdSend size="lg"/>
						</Link>
					</div>
				</div>
			)
		})
	}

	render() {
		return this.state.groups ? (
			<div className='container'>
				<div className='row justify-content-center'>
					<div className='col-6'>
						<div className='p-5 transparent radius margin-top'>
							<Row className='mt-4'>{this.displayGroups()}</Row>
						</div>
					</div>
				</div>
			</div>
		) : (
			<h3>Loading...</h3>
		)
	}
}

export default MessagesGroup
