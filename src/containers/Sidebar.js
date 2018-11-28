import React, { Component } from 'react'
import { connect } from 'react-redux'

const mapStateToProps = state => {
	return {
		tasks: state.tasks
	}
}

class ConnectedSidebar extends Component {
	constructor() {
		super()
	}
	render() {
		return (
			<div>
				<ul>
					<li>
						<a>ToDo</a>
					</li>
					<li>
						<a>Doing</a>
					</li>
					<li>
						<a>Done</a>
					</li>
				</ul>
			</div>
		)
	}
}

const Sidebar = connect(mapStateToProps)(ConnectedSidebar)

export default Sidebar
