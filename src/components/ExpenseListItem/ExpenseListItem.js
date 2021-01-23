import React from "react"
import styles from "./styles.module.css"

const ExpenseListItem = ({ description, createdAt, amount }) => (
	<div>
		<h3>{description}</h3>
		<p>
			{amount} - {createdAt}
		</p>
	</div>
)

export default ExpenseListItem
