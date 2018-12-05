import { ADD_TASK, EDIT_TASK, CANCEL_MODAL, UPDATE_TASK, SET_FILTER } from '../constants/action-types'

export const addTask = task => {
	return {
		type: ADD_TASK,
		payload: task
	}
}

export const editTask = idTask => ({
	type: EDIT_TASK,
	payload: idTask
})

export const cancelModal = () => ({
	type: CANCEL_MODAL
})

export const updateTask = (Task, Status, Id) => ({
	type: UPDATE_TASK,
	payload: {
		task: Task,
		status: Status,
		id: Id
	}
})

export const setFilter = filter => ({
	type: SET_FILTER,
	payload: filter
})
