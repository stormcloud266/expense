import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import configureStore from "./store/configureStore"
import { addExpense } from "./actions/expenses"
import { setTextFilters } from "./actions/filters"
import { getVisibleExpenses } from "./selectors/expenses"
import AppRouter from "./routers/AppRouter"
import reportWebVitals from "./reportWebVitals"
import "./index.css"

const store = configureStore()

store.dispatch(addExpense({ description: "water bill", amount: 50000 }))
store.dispatch(addExpense({ description: "rent", amount: 50000 }))
store.dispatch(setTextFilters("rent"))

const app = (
	<Provider store={store}>
		<React.StrictMode>
			<AppRouter />
		</React.StrictMode>
	</Provider>
)

ReactDOM.render(app, document.getElementById("root"))

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
