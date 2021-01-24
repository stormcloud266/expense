import { addExpense, editExpense, removeExpense } from '../../actions/expenses'

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
	const expense = {
		description: 'description',
		note: 'note',
		amount: 3000,
		createdAt: 0,
	}
	const action = addExpense(expense)

	expect(action).toEqual({
		type: 'ADD_EXPENSE',
		expense: {
			...expense,
			id: expect.any(String),
		},
	})
})

test('should setup add expense action object with default values', () => {
	const action = addExpense()

	expect(action).toEqual({
		type: 'ADD_EXPENSE',
		expense: {
			description: '',
			note: '',
			amount: 0,
			createdAt: 0,
			id: expect.any(String),
		},
	})
})
