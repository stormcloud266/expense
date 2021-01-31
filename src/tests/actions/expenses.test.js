import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

import {
	addExpense,
	editExpense,
	removeExpense,
	startAddExpense,
} from '../../actions/expenses'
import { expenses } from '../fixtures/expenses'

const createMockStore = configureMockStore([thunk])

test('should setup remove expense action object', () => {
	const action = removeExpense({ id: '123abc' })

	expect(action).toEqual({
		type: 'REMOVE_EXPENSE',
		id: '123abc',
	})
})

test('should setup edit expense action object', () => {
	const action = editExpense('123abc', {
		description: 'description',
	})

	expect(action).toEqual({
		type: 'EDIT_EXPENSE',
		id: '123abc',
		updates: {
			description: 'description',
		},
	})
})

test('should setup add expense action object', () => {
	const action = addExpense(expenses[2])

	expect(action).toEqual({
		type: 'ADD_EXPENSE',
		expense: expenses[2],
	})
})

test('should add expense to database and store', (done) => {
	const store = createMockStore({})
	const expense = { description: 'Gum', note: '', amount: 195, createdAt: 0 }
	store.dispatch(startAddExpense(expense)).then(() => {})
})

test('should add expense defaults to database and store', () => {})

// test('should setup add expense action object with default values', () => {
// 	const action = addExpense()

// 	expect(action).toEqual({
// 		type: 'ADD_EXPENSE',
// 		expense: {
// 			description: '',
// 			note: '',
// 			amount: 0,
// 			createdAt: 0,
// 			id: expect.any(String),
// 		},
// 	})
// })
