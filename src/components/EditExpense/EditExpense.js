import React from 'react'
import { connect } from 'react-redux'
import { startEditExpense, startRemoveExpense } from '../../actions/expenses'
import ExpenseForm from '../ExpenseForm/ExpenseForm'

import styles from './styles.module.css'

const EditExpense = (props) => (
	<div>
		<ExpenseForm
			expense={props.expense}
			onSubmit={(expense) => {
				props.startEditExpense(props.expense.id, expense)
				props.history.push('/')
			}}
		/>
		<button
			onClick={() => {
				props.startRemoveExpense({ id: props.expense.id })
				props.history.push('/')
			}}
		>
			remove
		</button>
	</div>
)

const mapStateToProps = (state, props) => ({
	expense: state.expenses.find(
		(expense) => expense.id === props.match.params.id
	),
})
const mapDispatchToProps = (dispatch, props) => ({
	startEditExpense: (id, expense) => dispatch(startEditExpense(id, expense)),
	startRemoveExpense: (data) => dispatch(startRemoveExpense(data)),
})
export default connect(mapStateToProps, mapDispatchToProps)(EditExpense)
