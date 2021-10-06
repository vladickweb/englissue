import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Chatrooms from '../views/Chatrooms/Chatrooms'
import SingleChatroom from '../views/Chatrooms/SingleChatroom'
import CompleteYourProfile from '../views/CompleteYourProfile/CompleteYourProfile'
import Home from '../views/Home/Home'
import Login from '../views/Login/Login'
import MessagesGroup from '../views/Messages/MessagesGroup'
import SingleMessage from '../views/Messages/SingleMessage'
import MyClasses from '../views/MyClasses/MyClasses'
import People from '../views/People/People'
import Signup from '../views/Signup/Signup'
import StripePayment from '../views/StripePayment/StripePayment'
import ChekoutTeacher from '../views/Teachers/ChekoutTeacher'
import Teachers from '../views/Teachers/Teachers'
import Videochat from '../views/Videochat/Videochat'

const Routes = ({ storeUser, loggedUser, fetchUser }) => {
	return (
		<Switch>
			<Route exact path='/' render={() => <Home />} />
			<Route exact path='/iniciar-sesion' render={props => <Login storeUser={storeUser} {...props} />} />
			<Route exact path='/registro' render={props => <Signup storeUser={storeUser} {...props} />} />
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
				render={props =>
					
						<MessagesGroup loggedUser={loggedUser} {...props} />
					
					}
			/>
			<Route exact path='/videochat' render={() => <Videochat />} />
			<Route exact path='/profesores' render={() => <Teachers />} />

			<Route
				exact
				path='/recargar-cuenta'
				render={() =>
					loggedUser ? (
						<StripePayment fetchUser={fetchUser} loggedUser={loggedUser} storeUser={storeUser} />
					) : (
						<Redirect to='/iniciar-sesion' />
					)}
			/>
			<Route exact path='/mis-clases' render={() => <MyClasses loggedUser={loggedUser} />} />
			<Route
				path='/profesores/:id'
				render={props => <ChekoutTeacher loggedUser={loggedUser} fetchUser={fetchUser} {...props} />}
			/>
			<Route path='/mis-mensajes/:id' render={props => <SingleMessage loggedUser={loggedUser} {...props} />} />
			
			<Route path='/gente-cerca' render={props => <People loggedUser={loggedUser} {...props} />} />
		</Switch>
	)
}

export default Routes
