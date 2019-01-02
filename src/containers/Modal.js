import React, { Component } from "react";
import { connect } from "react-redux";
import { cancelModal, updateTask, removeTask } from "../actions/index";
import { Link } from "react-router-dom";

const mapStateToProps = state => {
	console.log("Main mapStateToProps Modal: " + state.tasks[0].status);
	return {
		tasks: state.tasks,
		taskEdit: state.taskEdit
	};
};
const mapDispatchToProps = dispatch => {
	return {
		cancelModal: () => dispatch(cancelModal()),
		updateTask: (Task, Status, Id) => dispatch(updateTask(Task, Status, Id)),
		removeTask: Id => dispatch(removeTask(Id))
	};
};

class ConnectedModal extends Component {
	constructor() {
		super();
		this.state = {
			task: "",
			status: "",
			id: ""
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleCancel = this.handleCancel.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChangeSelect = this.handleChangeSelect.bind(this);
		this.handleRemove = this.handleRemove.bind(this);
	}
	componentWillMount() {
		console.log("WILLMOUNT: " + this.props.taskEdit.status);

		this.setState({
			task: this.props.taskEdit.task,
			status: this.props.taskEdit.status,
			id: this.props.taskEdit.id
		});
	}
	handleCancel(e) {
		this.props.cancelModal();
	}
	handleChange(e) {
		this.setState({
			task: e.target.value
		});
	}
	handleChangeSelect(e) {
		console.log("handleChangeSelect---> " + e.target.value);
		this.setState({
			status: e.target.value
		});
	}
	handleSubmit(e) {
		console.log("SUBMIT::: " + this.state.status);

		//e.preventDefault();
		this.props.updateTask(this.state.task, this.state.status, this.state.id);
	}
	handleRemove() {
		this.props.removeTask(this.state.id);
	}

	render() {
		return (
			<div className="modal__bg">
				<div className="modal__wrapper">
					<form onSubmit={this.handleSubmit}>
						<label htmlFor="title">Task:</label>
						<input type="text" id="title" value={this.state.task} onChange={this.handleChange} />
						<div className="form-group">
							{/* <label htmlFor="status">Change status</label> */}
							<select className="form-control" id="status" value={this.state.status} onChange={this.handleChangeSelect}>
								<option value="todo">To do</option>
								<option value="doing">Doing</option>
								<option value="done">Done</option>
							</select>
						</div>
						<Link to="/" onClick={this.handleCancel} className="btn-outline">
							CANCEL
						</Link>
						<button type="button" onClick={this.handleRemove} className="btn-outline">
							REMOVE
						</button>
						{/* <button type="submit" className="btn-solid">
							SAVE
						</button> */}
						<Link to="/" onClick={this.handleSubmit} className="btn-solid">
							SAVE
						</Link>
					</form>
				</div>
			</div>
		);
	}
}

const Modal = connect(
	mapStateToProps,
	mapDispatchToProps
)(ConnectedModal);

export default Modal;
