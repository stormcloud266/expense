import React from "react"
import ExpenseList from "../ExpenseList/ExpenseList"
import ExpenseListFilters from "../ExpenseListFilters/ExpenseListFilters"
import styles from "./styles.module.css"

const Dashboard = () => {
	return (
		<div>
			<ExpenseList />
			<ExpenseListFilters />
		</div>
	)
}

export default Dashboard
