import React from 'react'
import { Link } from 'react-router-dom'

import styles from './styles.module.css'

const ExpenseListItem = ({ description, createdAt, amount, id }) => (
	<div>
		<Link to={`/edit/${id}`}>
			<h3>{description}</h3>
		</Link>
		<p>
			{amount} - {createdAt}
		</p>
	</div>
)

export default ExpenseListItem
