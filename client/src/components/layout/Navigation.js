import React from 'react'
import { Link } from 'react-router-dom'
import AuthService from '../services/AuthService'

const authService = new AuthService()

export default function Navigation(props) {
	const logout = () => {
		authService.logout().then(res => props.storeUser(null)).catch(err => console.log(err))
	}
	return (
		<nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
			<Link to='/' className='navbar-brand' href='#'>
				Englissue
			</Link>
			<button
				className='navbar-toggler'
				type='button'
				data-toggle='collapse'
				data-target='#navbarSupportedContent'
				aria-controls='navbarSupportedContent'
				aria-expanded='false'
				aria-label='Toggle navigation'
			>
				<span className='navbar-toggler-icon' />
			</button>

			<div className='collapse navbar-collapse' id='navbarSupportedContent'>
				<ul className='navbar-nav mr-auto'>
					<li className='nav-item active'>
						<Link to='/iniciar-sesion' className='nav-link' href='#'>
							Iniciar Sesión
						</Link>
					</li>
					<li className='nav-item'>
						<Link to='/registro' className='nav-link' href='#'>
							Registrarse
						</Link>
					</li>
					<li className='nav-item'>
						<span className='nav-link' onClick={logout}>
							Logout
						</span>
					</li>
					<li className='nav-item'>
						<Link to='/salas-chat' className='nav-link'>
							Salas de chat
						</Link>
					</li>

					<li className='nav-item'>
						<Link to='/mis-mensajes' className='nav-link' href='#'>
							Mis mensajes
						</Link>
					</li>
					<li className='nav-item'>
						<Link to='/videochat' className='nav-link' href='#'>
							Videochat
						</Link>
					</li>
				</ul>
			</div>
		</nav>
	)
}
