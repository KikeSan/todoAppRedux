import {combineReducers} from 'redux'
import data from "./dataReducer";

export default combineReducers({
	data
});

/* import { ADD_TASK, EDIT_TASK, UPDATE_TASK, CANCEL_MODAL, SET_FILTER, REMOVE_TASK } from '../constants/action-types'

const initialState = {
	tasks: [
		{
			task: 'Learn react',
			fecha: '25/11/2018 13:20:12',
			status: 'todo',
			id: 'k02a67f3-2683-4fa6-a4e7-7d7da76dbeae'
		},
		{
			task: 'Build with redux',
			fecha: '25/11/2018 15:30:16',
			status: 'doing',
			id: 'k02a67f3-2913-4fa6-a4e7-4d7da76dbeea'
		}
	],
	modal: false,
	filterBy: 'all'
}

const taskReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_TASK:
			return {
				...state,
				tasks: state.tasks.concat(action.payload)
			}
		case EDIT_TASK:
			console.log('reducer EDIT_TASK: ' + action.payload)

			return {
				...state,
				taskEdit: state.tasks.find(busca => {
					return busca.id === action.payload
				}),
				modal: true
			}
		case UPDATE_TASK:
			console.log('Reducer UPDATE - ' + action.payload.status)

			return {
				...state,
				tasks: state.tasks.map(t => {
					if (t.id === action.payload.id) {
						return {
							task: action.payload.task,
							fecha: new Date().toLocaleDateString() + ' ' + new Date().toLocaleTimeString(),
							status: action.payload.status,
							id: t.id
						}
					} else {
						return t
					}
				}),
				modal: false
			}
		case CANCEL_MODAL:
			return {
				...state,
				modal: false
			}
		case SET_FILTER:
			return {
				...state,
				filterBy: action.payload
			}
		case REMOVE_TASK:
			return {
				...state,
				tasks: state.tasks.filter(idfiltro => {
					return idfiltro.id !== action.payload
				}),
				modal: false
			}
		default:
			console.log('Reducer default ---', state)

			return state
	}
}

export default taskReducer
 */