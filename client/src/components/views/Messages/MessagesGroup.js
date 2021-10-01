import React, { Component } from 'react'
import MessageService from '../../services/MessagesService'

export default class MessagesGroup extends Component {
	constructor() {
		super()

		this.state = {}

		this.messageService = new MessageService()
	}


    componentDidMount(){
        this.refreshMessagesGroup()
    }

    refreshMessagesGroup(){
        
    }

	render() {
		return <div>hola soy los mensajes</div>
	}
}
