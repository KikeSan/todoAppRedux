import { todosRef } from "../config/firebase";
import { ADD_TASK, EDIT_TASK, CANCEL_MODAL, UPDATE_TASK, SET_FILTER, REMOVE_TASK, FETCH_TODOS } from '../constants/action-types'


export const addToDo = newToDo => async dispatch => {
	todosRef.push().set(newToDo);
};

export const completeToDo = completeToDoId => async dispatch => {
	todosRef.child(completeToDoId).remove();
};

export const fetchToDos = () => async dispatch => {
	todosRef.on("value", snapshot => {
		dispatch({
			type: FETCH_TODOS,
			payload: snapshot.val()
		});
	});
};





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

export const removeTask = id => ({
	type: REMOVE_TASK,
	payload:id
})