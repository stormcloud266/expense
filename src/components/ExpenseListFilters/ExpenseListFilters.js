import React from "react"
import { connect } from "react-redux"
import { setTextFilters } from "../../actions/filters"
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
	</div>
)

const mapStateToProps = (state) => ({
	filters: state.filters,
})

export default connect(mapStateToProps)(ExpenseListFilters)
