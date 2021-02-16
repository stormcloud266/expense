import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'
import AppRouter, { history } from './routers/AppRouter'
import { startSetExpenses } from './actions/expenses'
import { login, logout } from './actions/auth'
import reportWebVitals from './reportWebVitals'
import './index.css'
import 'react-dates/initialize'
import './firebase/firebase'
import { firebase } from './firebase/firebase'

const store = configureStore()

const app = (
	<Provider store={store}>
		<React.StrictMode>
			<AppRouter />
		</React.StrictMode>
	</Provider>
)

let hasRendered = false

const renderApp = () => {
	if (!hasRendered) {
		ReactDOM.render(app, document.getElementById('root'))
		hasRendered = true
	}
}

ReactDOM.render(<p>loading...</p>, document.getElementById('root'))

firebase.auth().onAuthStateChanged((user) => {
	if (user) {
		store.dispatch(login(user.uid))
		store.dispatch(startSetExpenses()).then(() => {
			renderApp()
		})
		if (history.location.pathname === '/') {
			history.push('/dashboard')
		}
	} else {
		store.dispatch(logout())
		renderApp()
		history.push('/')
	}
})

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
