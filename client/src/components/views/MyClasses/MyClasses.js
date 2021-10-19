import React, { Component } from 'react'
import UserService from '../../services/UserService'
import { Link } from 'react-router-dom'
import { FormControl, InputGroup } from 'react-bootstrap'
import { AwesomeButton, AwesomeButtonProgress, AwesomeButtonSocial } from 'react-awesome-button'


export default class MyClasses extends Component {
	constructor(props) {
		super(props)

		this.state = {
			classes: null,
			searchValue: ''
		}
		this.userService = new UserService()
	}

	componentDidMount() {
		this.userService
			.getMyClasses()
			.then(data => {
				const classesArr = data.data.filteredArr

				this.setState({
					...this.state,
					classes: classesArr
				})
			})
			.catch(err => console.log(err))
	}

	countReapeatedClasses() {}

	displayClasses() {
		if (!this.state.classes) {
			return <h1>loading...</h1>
		} else {
			const filteredClasses = this.state.classes.filter(teacher =>
				teacher.name.toLowerCase().includes(this.state.searchValue.toLowerCase())
			)

			return filteredClasses.length > 0 ? (
				filteredClasses.map((elm, idx) => {
					return (
						<li key={elm + idx} className='list-group-item my-5 bg-transparent text-white border-none'>
							<div className='row align-items-center'>
								<div className='col-3 text-center'>
									<img className="image-list" src={elm.image} alt={elm.name} />
								</div>
								<div className='col-3 h1 text-center'>{elm.cuantity}</div>
								<div className='col-3'>
									<h3>{elm.name}</h3>
								</div>
								<div className='col-3'>
									<Link to={`/mis-mensajes/${elm._id}`} >
									<AwesomeButton type="secondary">
										Enviar un mensaje
									</AwesomeButton>
									</Link>
								</div>
							</div>
						</li>
					)
				})
			) : (
				<h1>no hay resultados</h1>
			)
		}
	}

	handleChange = e => {
		const { name, value } = e.target
		this.setState({
			...this.state,
			[name]: value
		})
	}

	render() {
		return (
			<div className='margin-top'>
				<div className='row justify-content-center'>
					<div className='col-8'>
						<InputGroup className='mb-3 mt-4 transparent radius p-3'>
							<FormControl
								className='text-white'
								onChange={this.handleChange}
								name='searchValue'
								value={this.state.searchValue}
								placeholder='Buscar por nombre...'
								aria-label='buscar'
							/>
						</InputGroup>

						<ul className='list-group transparent radius p-5'>
						<div className="row justify-content-center">
							<div className="col-3"></div>
							<div className="col-3 h2 text-white">Número de Clases</div>
							<div className="col-3 h2 text-white">Nombre</div>
							<div className="col-3"></div>

						{this.displayClasses()}
						</div>
						</ul>
					</div>
				</div>
			</div>
		)
	}
}
