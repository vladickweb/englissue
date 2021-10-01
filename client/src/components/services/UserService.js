import axios from 'axios'

class UserService {
	constructor() {
		this.instance = axios.create({
			baseURL: `${process.env.REACT_APP_BASE_URL}/api/user`,
			withCredentials: true
		})
	}

	completeProfile = data => this.instance.put('/complete-profile', { data })
}

export default UserService
