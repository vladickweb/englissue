import React, { Component } from 'react'
import { Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import MessagesService from '../../services/MessagesService'

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

			const result = ids.filter(id => id !== myId)

			return (
				<div>
					<Link to={`/mis-mensajes/${result[0]}`}>
						<h1>
							{group.users[0].name} && {group.users[1].name}
						</h1>
					</Link>
				</div>
			)
		})
	}

	render() {
		return this.state.groups ? (
			<div>
				<Row className='mt-4'>{this.displayGroups()}</Row>
			</div>
		) : (
			<h3>Loading...</h3>
		)
	}
}

export default MessagesGroup
