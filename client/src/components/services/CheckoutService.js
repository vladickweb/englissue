import axios from 'axios'

class CheckoutService {
	constructor() {
		this.instance = axios.create({
			baseURL: `${process.env.REACT_APP_BASE_URL_API_URL}/api/checkout/`,
			withCredentials: true
		})
	}

	createCheckout = (id, amount) => this.instance.post('/', { id, amount })
}

export default CheckoutService
