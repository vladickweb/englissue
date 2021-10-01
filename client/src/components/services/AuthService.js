import axios from 'axios'

class AuthService {
	constructor() {
		this.instance = axios.create({
			baseURL: `${process.env.REACT_APP_BASE_URL}/api/auth`,
			withCredentials: true
		})
	}

	signup = (email, pwd) => this.instance.post('/signup', { email, pwd })
	login = (email, pwd) => this.instance.post('/login', { email, pwd })
	google = data => this.instance.post('/google', { data })
	logout = () => this.instance.get('/logout')
	isloggedin = () => this.instance.post('/isloggedin')
}

export default AuthService
