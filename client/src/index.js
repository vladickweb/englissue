import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { BrowserRouter as Router } from 'react-router-dom'
// import { ContextProvider } from './SocketContext'

ReactDOM.render(
	<Router>
		<React.StrictMode>
			{/* <ContextProvider> */}
				<App />
			{/* </ContextProvider> */}
		</React.StrictMode>
	</Router>,
	document.getElementById('root')
)

reportWebVitals()
