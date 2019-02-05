import React, { Component } from "react";
import { connect } from "react-redux";
import { addTask, editTask } from "../actions/index";
import Modal from "./Modal";
import { filtroBonito } from "./functions";
//import ItemTask from '../components/itemTask'
import { Link, withRouter } from "react-router-dom";

const mapStateToProps = state => {
	console.log("Main mapStateToProps List: " , state.tasks);

	return {
		tasks: state.tasks,
		modal: state.modal,
		filterBy: state.filterBy
	};
};
const mapDispatchToProps = dispatch => {
	return {
		editTask: idTask => dispatch(editTask(idTask))
	};
};
class ConnectedMain extends Component {
	constructor() {
		super();
		this.handleEdit = this.handleEdit.bind(this);
	}
	handleEdit(e) {
		const idEdit = e.currentTarget.attributes["id-task"].value;
		this.props.editTask(idEdit);
	}

	render() {
		return (
			<div className="main">
				<div className="content">
					<ul>
						{this.props.tasks.map(item => {
							if (item.status === this.props.filterBy || this.props.filterBy === "all")
								return (
									<li key={item.id}>
										<Link to={`/edit/${item.id}`} className="itemTask" onClick={this.handleEdit} id-task={item.id}>
											<h3>{item.task}</h3>
											<p>{filtroBonito(item.status)}</p>
										</Link>
									</li>
								);
						})}
					</ul>
				</div>
				{this.props.modal ? <Modal /> : <div />}
			</div>
		);
	}
}

const List = withRouter(
	connect(
		mapStateToProps,
		mapDispatchToProps
	)(ConnectedMain)
);

export default List;
