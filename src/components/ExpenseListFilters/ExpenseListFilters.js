import React, { useState } from 'react'
import { connect } from 'react-redux'
import { DateRangePicker } from 'react-dates'
import {
	sortByAmount,
	sortByDate,
	setTextFilters,
	setStartDate,
	setEndDate,
} from '../../actions/filters'
import styles from './styles.module.css'

const ExpenseListFilters = ({ filters, dispatch }) => {
	const [calendarFocused, setCalendarFocused] = useState(null)

	const onDatesChange = ({ startDate, endDate }) => {
		dispatch(setStartDate(startDate))
		dispatch(setEndDate(endDate))
	}

	return (
		<div>
			<input
				type='text'
				value={filters.text}
				onChange={(e) => {
					dispatch(setTextFilters(e.target.value))
				}}
			/>
			<select
				value={filters.sortBy}
				onChange={(e) => {
					if (e.target.value === 'amount') {
						dispatch(sortByAmount())
					} else if (e.target.value === 'date') {
						dispatch(sortByDate())
					}
				}}
			>
				<option value='date'>Date</option>
				<option value='amount'>Amount</option>
			</select>

			<DateRangePicker
				startDate={filters.startDate}
				endDate={filters.endDate}
				startDateId='your_unique_start_date_id'
				endDateId='your_unique_end_date_id'
				onDatesChange={onDatesChange}
				focusedInput={calendarFocused}
				onFocusChange={(focusedInput) => setCalendarFocused(focusedInput)}
				numberOfMonths={1}
				isOutsideRange={() => false}
				showClearDates={true}
			/>
		</div>
	)
}

const mapStateToProps = (state) => ({
	filters: state.filters,
})

export default connect(mapStateToProps)(ExpenseListFilters)
