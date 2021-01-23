import React from "react"
import { connect } from "react-redux"
import { sortByAmount, sortByDate, setTextFilters } from "../../actions/filters"
import styles from "./styles.module.css"

const ExpenseListFilters = ({ filters, dispatch }) => (
	<div>
		<input
			type="text"
			value={filters.text}
			onChange={(e) => {
				dispatch(setTextFilters(e.target.value))
			}}
		/>
		<select
			value={filters.sortBy}
			onChange={(e) => {
				if (e.target.value === "amount") {
					dispatch(sortByAmount())
				} else if (e.target.value === "date") {
					dispatch(sortByDate())
				}
			}}
		>
			<option value="date">Date</option>
			<option value="amount">Amount</option>
		</select>
	</div>
)

const mapStateToProps = (state) => ({
	filters: state.filters,
})

export default connect(mapStateToProps)(ExpenseListFilters)
