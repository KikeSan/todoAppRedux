/* import { combineReducers } from 'redux'
import tasks from './tasks'

const reducers = combineReducers({
	tasks
})

export default reducers
 */

import { ADD_TASK } from '../constants/action-types'

const initialState = {
	tasks: [
		{
			title: 'Titulo 1',
			fecha: '25/11/2018 13:20:12',
			status: 'todo',
			id: 1
		},
		{
			title: 'Titulo 2',
			fecha: '25/11/2018 15:30:16',
			status: 'doing',
			id: 2
		}
	],
	modal: false
}

const taskReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_TASK:
			return {
				...state,
				tasks: state.tasks.concat(action.payload)
			}

		default:
			console.log('Reducer default ---' + state)

			return state
	}
}

export default taskReducer
