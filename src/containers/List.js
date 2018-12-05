import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addTask, editTask } from '../actions/index'
import Modal from './Modal'
//import ItemTask from '../components/itemTask'

const mapStateToProps = state => {
	console.log('Main mapStateToProps List: ' + state.setFilter)

	return {
		tasks: state.tasks,
		modal: state.modal,
		setFilter: state.setFilter
	}
}
const mapDispatchToProps = dispatch => {
	return {
		editTask: idTask => dispatch(editTask(idTask))
	}
}

class ConnectedMain extends Component {
	constructor() {
		super()
		this.handleEdit = this.handleEdit.bind(this)
	}
	handleEdit(e) {
		const idEdit = e.currentTarget.attributes['id-task'].value
		this.props.editTask(idEdit)
	}
	render() {
		return (
			<div className="main">
				<div className="content">
					<ul>
						{this.props.tasks.map(item => {
							if (item.status === this.props.setFilter || this.props.setFilter === 'all')
								return (
									<li key={item.id}>
										<a className="itemTask" onClick={this.handleEdit} id-task={item.id}>
											<h3>{item.task}</h3>
											<p>{item.status}</p>
										</a>
									</li>
								)
						})}
					</ul>
				</div>
				{this.props.modal ? <Modal /> : <div />}
			</div>
		)
	}
}

const List = connect(
	mapStateToProps,
	mapDispatchToProps
)(ConnectedMain)

export default List
