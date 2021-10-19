import React from 'react'
import { Link, Redirect } from 'react-router-dom'
import AuthService from '../services/AuthService'
import { Navbar, Nav } from 'react-bootstrap'
import './Navigation.css'

const authService = new AuthService()

export default function Navigation(props) {
	const logout = () => {
		authService
			.logout()
			.then(res => {
				props.storeUser(null)
			})
			.catch(err => console.log(err))
	}

	const balance = props.loggedUser?.balance

	return (
		<div>
			<Navbar
				fixed='top'
				variant='light'
				expand='md'
				className='animate-navbar nav-theme justify-content-between margin-bottom'
			>	

				<Link to="/" className='text-decoration-none text-dark'>
					<h1 className='margin-left'>Englissue</h1>
				</Link>

				<div className='margin-right'>
					<Nav className='ml-auto'>
						{!props.loggedUser ? (
							<div className='d-flex'>
								<Link to='/iniciar-sesion' className='nav-link' href='#'>
									Iniciar Sesión
								</Link>
								<Link to='/registro' className='nav-link' href='#'>
									Registrarse
								</Link>
							</div>
						) : (
							<div className='d-flex'>
								<Link to='/gente-cerca' className='nav-link margin' href='#'>
									Englissuers
								</Link>
								<Link to='/salas-chat' className='nav-link margin'>
									Salas de chat
								</Link>

								<Link to='/mis-mensajes' className='nav-link margin' href='#'>
									Mis mensajes
								</Link>

								<Link to='/videochat' className='nav-link margin' href='#'>
									Videochat
								</Link>

								<Link to='/profesores' className='nav-link margin' href='#'>
									Profesores
								</Link>

								<Link to='/mis-clases' className='nav-link margin' href='#'>
									Mis Clases
								</Link>
								<Link to='/iniciar-sesion' className="text-decoration-none margin">
									<span className='nav-link' onClick={logout}>
										Logout
									</span>
								</Link>
								<Link to='/recargar-cuenta' className='nav-link' href='#'>
									Balance: {balance / 100}€
								</Link>
							</div>
						)}
					</Nav>
				</div>
			</Navbar>
		</div>
	)
}
