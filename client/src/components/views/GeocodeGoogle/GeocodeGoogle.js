import React, { Component } from 'react'
import Geocode from 'react-geocode'

export default class GeocodeGoogle extends Component {
	constructor(props) {
		super(props)
		this.state = {
			latitude: '',
			longitude: ''
		}
	}

	componentDidMount() {
		navigator.geolocation.getCurrentPosition(position => {
			const lat = position.coords.latitude
			const long = position.coords.longitude

			console.log(lat)
			console.log(long)

			this.changeState(lat, long)
		})
	}

	changeState(lat, long) {
		this.setState(
			{
				latitude: lat,
				longitude: long
			},
			this.geolocation(lat, long)
		)
	}

	geolocation(lat, long) {
		Geocode.setApiKey(process.env.REACT_APP_BASE_URL_GOOGLE)
		Geocode.setLanguage('es')
		Geocode.setRegion('es')
		Geocode.setLocationType('ROOFTOP')
		Geocode.enableDebug()
		
		Geocode.fromLatLng(lat, long).then(
			response => {
				let city, country
				for (let i = 0; i < response.results[0].address_components.length; i++) {
					for (let j = 0; j < response.results[0].address_components[i].types.length; j++) {
						switch (response.results[0].address_components[i].types[j]) {
							case 'locality':
								city = response.results[0].address_components[i].long_name
								break
							case 'country':
								country = response.results[0].address_components[i].long_name
								break
              default: 
                break
						}
					}
				}
				console.log(city, country, this.props)
        this.props.handleChangeDirection(city, country)
			},
			error => {
				console.error(error)
			}
		)
	}

	render() {
		return <div>{/* <h4>Using geolocation JavaScript API in React</h4> */}</div>
	}
}
