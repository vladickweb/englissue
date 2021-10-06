import React, { Component } from 'react'
import { FormControl, InputGroup } from 'react-bootstrap'
import TeacherServices from '../../services/TeachersService'
import SingleTeacher from './SingleTeacher'

export default class Teachers extends Component {
	constructor() {
		super()

		this.state = {
			teachers: null,
			searchValue: ''
		}
		this.teacherServices = new TeacherServices()
	}

	componentDidMount() {
		this.refreshTeachers()
	}

	refreshTeachers = () => {
		this.teacherServices
			.getAllTeachers()
			.then(teachers => {
				this.setState({
					...this.state,
					teachers: teachers.data
				})
			})
			.catch(err => console.log(err))
	}

	displayTeachers = () => {
		const filteredTeachers = this.state.teachers.filter(teacher =>
			teacher.name.toLowerCase().includes(this.state.searchValue.toLowerCase())
		)
		return filteredTeachers.length > 0 ? (
			filteredTeachers.map(teacher => (
				<div key={teacher._id} className='col-md-4'>
					<SingleTeacher {...teacher} />
				</div>
			))
		) : (
			<p>Sin resultados</p>
		)
	}

	handleChange = e => {
		const { name, value } = e.target
		this.setState({
			...this.state,
			[name]: value
		})
	}

	render() {
		return this.state.teachers ? (
			<div>
				<InputGroup className='mb-3 mt-4'>
					<FormControl
						onChange={this.handleChange}
						name='searchValue'
						value={this.state.searchValue}
						placeholder='Buscar por nombre...'
						aria-label='buscar'
					/>
				</InputGroup>
				<div className='row justify-content-center'>{this.displayTeachers()}</div>
			</div>
		) : (
			<h3>Loading...</h3>
		)
	}
}
