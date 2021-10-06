import axios from 'axios'

class TeacherServices {
	constructor() {
		this.instance = axios.create({
			baseURL: `${process.env.REACT_APP_BASE_URL}/api/teachers`,
			withCredentials: true
		})
	}

	getAllTeachers = () => this.instance.get('/')
	// checkNewMessages = id => this.instance.get(`/${id}`)
}

export default TeacherServices