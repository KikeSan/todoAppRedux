import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setFilter } from '../actions/index'

const mapStateToProps = state => {
	return {
		tasks: state.tasks,
		setFilter: state.setFilter
	}
}

const mapDispatchToProps = dispatch => {
	return {
		setFilter: filter => dispatch(setFilter(filter))
	}
}

class ConnectedSidebar extends Component {
	constructor() {
		super()
		this.handleFilter = this.handleFilter.bind(this)
	}
	handleFilter(e) {
		console.log('SET_FILTER::: ' + e.target.attributes['filter-tag'].value)
		this.props.setFilter(e.target.attributes['filter-tag'].value)
	}
	render() {
		return (
			<div>
				<div className="counter">{this.props.tasks.length} task(s)</div>
				<div className="controls">
					<a className="filter-btn" onClick={this.handleFilter} filter-tag="all">
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
					</a>
				</div>
			</div>
		)
	}
}

const Filter = connect(
	mapStateToProps,
	mapDispatchToProps
)(ConnectedSidebar)

export default Filter
