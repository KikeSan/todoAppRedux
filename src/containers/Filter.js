import React, { Component } from "react";
import { connect } from "react-redux";
import { setFilter } from "../actions/index";
import { Link, withRouter } from "react-router-dom";

const mapStateToProps = state => {
	return {
		tasks: state.tasks,
		filterBy: state.filterBy
	};
};

const mapDispatchToProps = dispatch => {
	return {
		setFilter: filter => dispatch(setFilter(filter))
	};
};

class ConnectedSidebar extends Component {
	constructor() {
		super();
		this.handleFilter = this.handleFilter.bind(this);
		this.cuentaActivos = this.cuentaActivos.bind(this);
	}
	handleFilter(e) {
		this.props.setFilter(e.target.attributes["filter-tag"].value);
	}
	cuentaActivos() {
		let numitems = 0;
		this.props.tasks.map(i => {
			if (i.status === this.props.filterBy || this.props.filterBy === "all") {
				numitems++;
			}
		});
		return numitems;
	}
	render() {
		const num = this.cuentaActivos();
		return (
			<div>
				<div className="counter">{num} task(s)</div>
				<div className="controls">
					<Link to="/" className="filter-btn" onClick={this.handleFilter} filter-tag="all">
						All
					</Link>
					<Link to="/todo" className="filter-btn" onClick={this.handleFilter} filter-tag="todo">
						ToDo
					</Link>
					<Link to="/doing" className="filter-btn" onClick={this.handleFilter} filter-tag="doing">
						Doing
					</Link>
					<Link to="/done" className="filter-btn" onClick={this.handleFilter} filter-tag="done">
						Done
					</Link>
					{/* <a className="filter-btn" onClick={this.handleFilter} filter-tag="all">
						All
					</a>
					<a className="filter-btn" onClick={this.handleFilter} filter-tag="todo">
						ToDo
					</a>
					<a className="filter-btn" onClick={this.handleFilter} filter-tag="doing">
						Doing
					</a>
					<a className="filter-btn" onClick={this.handleFilter} filter-tag="done">
						Done
					</a> */}
				</div>
			</div>
		);
	}
}

const Filter = connect(
	mapStateToProps,
	mapDispatchToProps
)(ConnectedSidebar);

export default withRouter(Filter);
