import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Chatrooms from '../views/Chatrooms/Chatrooms'
import SingleChatroom from '../views/Chatrooms/SingleChatroom'
import CompleteYourProfile from '../views/CompleteYourProfile/CompleteYourProfile'
import Home from '../views/Home/Home'
import Login from '../views/Login/Login'
import Signup from '../views/Signup/Signup'

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
			<Route path="/salas-chat/:id" render={(props) => <SingleChatroom {...props} />} />
		</Switch>
	)
}

export default Routes
