import React, { Component } from 'react'
import { connect } from 'react-redux'
import uuidv1 from 'uuid'
import { addTask } from '../actions/index'

const mapDispatchToProps = dispatch => {
	return {
		addTask: task => dispatch(addTask(task))
	}
}
class ConnectedForm extends Component {
	constructor() {
		super()
		this.state = {
			task: ''
		}
		this.handleChange = this.handleChange.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)
	}
	handleChange(e) {
		this.setState({
			task: e.target.value
		})
	}
	handleSubmit(e) {
		e.preventDefault()
		const { task } = this.state,
			id = uuidv1(),
			fecha = new Date().toLocaleDateString() + ' ' + new Date().toLocaleTimeString(),
			status = 'todo'
		this.props.addTask({ task, fecha, status, id })
		this.setState({
			task: ''
		})
	}
	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<label htmlFor="task">Add task</label>
				<input type="text" id="task" value={this.state.task} onChange={this.handleChange} />
				<button type="submit" className="btn-outline">ADD</button>
			</form>
		)
	}
}

const Form = connect(
	null,
	mapDispatchToProps
)(ConnectedForm)

export default Form
