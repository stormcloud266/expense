import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'
import AppRouter from './routers/AppRouter'
import { startSetExpenses } from './actions/expenses'
import reportWebVitals from './reportWebVitals'
import './index.css'
import 'react-dates/initialize'
import './firebase/firebase'

const store = configureStore()

const app = (
	<Provider store={store}>
		<React.StrictMode>
			<AppRouter />
		</React.StrictMode>
	</Provider>
)

ReactDOM.render(<p>loading...</p>, document.getElementById('root'))

store.dispatch(startSetExpenses()).then(() => {
	ReactDOM.render(app, document.getElementById('root'))
})

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
