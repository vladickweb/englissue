import axios from 'axios'

class MessageService {
	constructor() {
		this.instance = axios.create({
			baseURL: `${process.env.REACT_APP_BASE_URL}/api/messages`,
			withCredentials: true
		})
	}

	createGroup = data => this.instance.post('/create', {data})
	createMessage = data => this.instance.post('/message', {data})
	getMyGroups = () => this.instance.get('/get-my-groups')
	// checkNewMessages = id => this.instance.get(`/${id}`)
}

export default MessageService
