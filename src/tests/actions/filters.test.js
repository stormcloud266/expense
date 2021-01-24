import {
	setTextFilters,
	sortByAmount,
	sortByDate,
	setStartDate,
	setEndDate,
} from '../../actions/filters'
import moment from 'moment'

test('should generate set text filter action object', () => {
	const action = setTextFilters('test')

	expect(action).toEqual({
		type: 'SET_TEXT_FILTER',
		text: 'test',
	})
})

test('should set up sort by amount action object', () => {
	const action = sortByAmount()

	expect(action).toEqual({
		type: 'SORT_BY_AMOUNT',
	})
})

test('should set up sort by date action object', () => {
	const action = sortByDate()

	expect(action).toEqual({
		type: 'SORT_BY_DATE',
	})
})

test('should reset text filter action object', () => {
	const action = setTextFilters()

	expect(action).toEqual({
		type: 'SET_TEXT_FILTER',
		text: '',
	})
})

test('should generate set start date action object', () => {
	const action = setStartDate(moment(0))

	expect(action).toEqual({
		type: 'SET_START_DATE',
		date: moment(0),
	})
})

test('should generate set end date action object', () => {
	const action = setEndDate(moment(0))

	expect(action).toEqual({
		type: 'SET_END_DATE',
		date: moment(0),
	})
})
