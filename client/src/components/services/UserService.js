import axios from 'axios'

class UserService {
	constructor() {
		this.instance = axios.create({
			baseURL: `${process.env.REACT_APP_BASE_URL}/api/user`,
			withCredentials: true
		})
	}

	completeProfile = data => this.instance.put('/complete-profile', { data })
	getSingleUser = id => this.instance.get(`/${id}`)
	updateUser = data => this.instance.put('/update', { data })
	getMyClasses = () => this.instance.get(`/my-classes`)
	getMyGroups = (data) => this.instance.post(`/my-groups/`, {data})
	getPeople = () => this.instance.get(`/people`)
}

export default UserService
