import { ADD_TASK } from '../constants/action-types'
/* export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'

export const increment = () => {
  return {
    type: INCREMENT,
  }
}

export const decrement = () => {
  return {
    type: DECREMENT,
  }
} */

export const addTask = task => {
	return {
		type: ADD_TASK,
		payload: task
	}
}
