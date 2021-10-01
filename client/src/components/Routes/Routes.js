import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Chatrooms from '../views/Chatrooms/Chatrooms'
import SingleChatroom from '../views/Chatrooms/SingleChatroom'
import CompleteYourProfile from '../views/CompleteYourProfile/CompleteYourProfile'
import Home from '../views/Home/Home'
import Login from '../views/Login/Login'
import MessagesGroup from '../views/Messages/MessagesGroup'
import Signup from '../views/Signup/Signup'
import Videochat from '../views/Videochat/Videochat'

const Routes = ({ storeUser, loggedUser }) => {
	return (
		<Switch>
			<Route exact path='/' render={() => <Home />} />
			<Route exact path='/iniciar-sesion' render={props => <Login storeUser={storeUser} {...props} />} />
			<Route exact path='/registro' render={props => <Signup {...props} />} />
			<Route
				exact
				path='/completar-perfil'
				render={props => <CompleteYourProfile storeUser={storeUser} {...props} />}
			/>
			<Route exact path='/salas-chat' render={props => <Chatrooms storeUser={storeUser} {...props} />} />
			<Route path='/salas-chat/:id' render={props => <SingleChatroom {...props} />} />
			<Route
				exact
				path='/mis-mensajes'
				render={() =>
					loggedUser ? <MessagesGroup loggedUser={loggedUser} /> : <Redirect to='/iniciar-sesion' />}
			/>
			<Route exact path='/videochat' render={() => <Videochat />} />
		</Switch>
	)
}

export default Routes
