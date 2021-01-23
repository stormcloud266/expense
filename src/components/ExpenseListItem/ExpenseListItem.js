import React from "react"
import { connect } from "react-redux"
import { removeExpense } from "../../actions/expenses"

import styles from "./styles.module.css"

const ExpenseListItem = ({ description, createdAt, amount, id, dispatch }) => (
	<div>
		<h3>{description}</h3>
		<p>
			{amount} - {createdAt}
		</p>
		<button onClick={() => dispatch(removeExpense({ id }))}>remove</button>
	</div>
)

export default connect()(ExpenseListItem)
