import React, { Component } from 'react'
// import { Button, Form } from 'react-bootstrap'
import UploadsService from '../../services/UploadService'
import UserService from '../../services/UserService'
import AutocompleteGoogle from '../AutocompleteGoogle/AutocompleteGoogle'
import GeocodeGoogle from '../GeocodeGoogle/GeocodeGoogle'

export default class CompleteYourProfile extends Component {
	state = {
		name: '',
		iban: '',
		image: '',
		rol: '',
		city: '',
		country: '',
		isLoading: false,
		showManualDirection: false
	}

	uploadService = new UploadsService()
	userService = new UserService()

	handleChange = e => {
		const { value, name } = e.target

		this.setState({
			...this.state,
			[name]: value
		})
	}

	handleChangeDirection = (city, country) => {
		this.setState({
			...this.state,
			city: city,
			country: country
		})
	}

	handleFile = e => {
		this.setState({
			...this.state,
			isLoading: true
		})

		const uploadData = new FormData()
		uploadData.append('imageData', e.target.files[0])

		this.uploadService
			.uploadImg(uploadData)
			.then(res => {
				this.setState({
					...this.state,
					isLoading: false,
					image: res.data.cloudinary_url
				})
			})
			.catch(err => alert('Error, esto lo hacéis vosotros.'))
	}

	handleSubmitTeacher = e => {
		e.preventDefault()
		if (!this.state.country || !this.state.city) {
			alert('No hemos podido detectar tu ubicación, por favor introduce tu ciudad.')
			this.setState(
				{
					...this.state,
					showManualDirection: true
				},
				console.log(this.state)
			)
		} else {
			this.userService
				.completeProfile({
					name: this.state.name,
					rol: 'teacher',
					city: this.state.city,
					country: this.state.country,
					image: this.state.image,
					iban: this.state.iban
				})
				.then(() => {
					this.setState({
						name: '',
						iban: '',
						image: '',
						rol: '',
						city: '',
						country: '',
						isLoading: false,
						showManualDirection: false
					})
					const modal = document.querySelector('#ProfesionalsModal')
					modal.classList.remove('show')
				})
				.catch(err => console.log(err))
		}
	}

	handleSubmitStudent = e => {
		e.preventDefault()
		if (!this.state.country || !this.state.city) {
			alert('No hemos podido detectar tu ubicación, por favor introduce tu ciudad.')
			this.setState(
				{
					...this.state,
					showManualDirection: true
				},
				console.log(this.state)
			)
		} else {
			this.userService
				.completeProfile({
					name: this.state.name,
					rol: 'student',
					city: this.state.city,
					country: this.state.country,
					image: this.state.image
				})
				.then(() => {
					this.setState({
						name: '',
						iban: '',
						image: '',
						rol: '',
						city: '',
						country: '',
						isLoading: false,
						showManualDirection: false
					})
					const modal = document.querySelector('#studentModal')
					modal.classList.remove('show')
				})
				.catch(err => console.log(err))
		}
	}

	render() {
		return (
			<div className='container'>
				<div className='row justify-content-center'>
					<button
						type='button'
						className='btn btn-primary'
						data-toggle='modal'
						data-target='#ProfesionalsModal'
					>
						Profesor
					</button>
					<button type='button' className='btn btn-primary' data-toggle='modal' data-target='#studentModal'>
						Estudiante
					</button>

					<GeocodeGoogle handleChangeDirection={this.handleChangeDirection} />

					<div
						className='modal fade'
						id='ProfesionalsModal'
						tabIndex='-1'
						role='dialog'
						aria-labelledby='exampleModalLabel'
						aria-hidden='true'
					>
						<div className='modal-dialog' role='document'>
							<div className='modal-content'>
								<div className='modal-header'>
									<h5 className='modal-title' id='exampleModalLabel'>
										Datos Profesor
									</h5>
								</div>
								<div className='modal-body'>
									<form onSubmit={this.handleSubmitTeacher}>
										<div className='form-group'>
											<label>
												<p>Imagen de perfil</p>
												<input
													onChange={e => this.handleFile(e)}
													type='file'
													className='form-control'
													id='image'
													aria-describedby='emailHelp'
													name='image'
													required
												/>
											</label>
										</div>

										<div className='form-group'>
											<label>
												<p>Nombre completo</p>
												<input
													onChange={e => this.handleChange(e)}
													type='text'
													className='form-control'
													id='name'
													name='name'
													required
												/>
											</label>
										</div>

										<div className='form-group'>
											<label>
												<p>IBAN</p>
												<input
													onChange={e => this.handleChange(e)}
													type='text'
													className='form-control'
													id='iban'
													name='iban'
													required
												/>
											</label>
										</div>
										{this.state.showManualDirection && (
											<AutocompleteGoogle handleChangeDirection={this.handleChangeDirection} />
										)}
										<hr className='mb-4' />
										{this.state.isLoading && <h1>LOADING</h1>}
										<button type='submit' className='btn btn-primary btn-block'>
											Enviar
										</button>
									</form>
								</div>
							</div>
						</div>
					</div>

					<div
						className='modal fade'
						id='studentModal'
						tabIndex='-1'
						role='dialog'
						aria-labelledby='ModalLabel'
						aria-hidden='true'
					>
						<div className='modal-dialog' role='document'>
							<div className='modal-content'>
								<div className='modal-header'>
									<h5 className='modal-title' id='ModalLabel'>
										Datos alumno
									</h5>
								</div>
								<div className='modal-body'>
									<form onSubmit={e => this.handleSubmitStudent(e)}>
										<div className='form-group'>
											<label>
												<p>Imagen de perfil</p>
												<input
													onChange={e => this.handleFile(e)}
													type='file'
													className='form-control'
													name='image'
													required
												/>
											</label>
										</div>

										<div className='form-group'>
											<label>
												<p>Nombre completo</p>
												<input
													onChange={e => this.handleChange(e)}
													type='text'
													className='form-control'
													id='name'
													name='name'
													required
												/>
											</label>
										</div>
										{this.state.showManualDirection && (
											<AutocompleteGoogle handleChangeDirection={this.handleChangeDirection} />
										)}

										{this.state.isLoading && <h1>LOADING</h1>}
										<hr className='mb-4' />
										<button type='submit' className='btn btn-primary btn-block'>
											Enviar
										</button>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}
