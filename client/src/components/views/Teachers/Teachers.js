import React, { Component } from 'react'
import { FormControl, InputGroup } from 'react-bootstrap'
import TeacherServices from '../../services/TeachersService'
import SingleTeacher from './SingleTeacher'
import './Teachers.css'

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
				<div key={teacher._id} className='col-4'>
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
			<div className='margin-top'>
				<div className='container mt-5 p-5 radius transparent'>
					<input
						autoComplete='off'
						type='text'
						className='form-control text-white'
						placeholder='Buscar profesionales'
						onChange={this.handleChange}
						name='searchValue'
					/>
				</div>
				<div className='container p-5'>
					<div className='row justify-content-around'>{this.displayTeachers()}</div>
				</div>
			</div>
		) : (
			<h3>Loading...</h3>
		)
	}
}
