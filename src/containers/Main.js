import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addTask } from '../actions/index'
//import ItemTask from '../components/itemTask'

const mapStateToProps = state => {
	console.log('Main mapStateToProps: ' + state.tasks[0].title)

	return {
		tasks: state.tasks
	}
}
const mapDispatchToProps = dispatch => {
	return {
		addTask: task => dispatch(addTask(task))
	}
}

class ConnectedMain extends Component {
	constructor() {
		super()
	}
	render() {
		console.log('Render Main:: ' + this.props.tasks)

		return (
			<div className="main">
				<header>Hola</header>
				<div className="content">
					<ul>
						{this.props.tasks.map(item => (
							<li key={item.id}>
								{/* <ItemTask data={item} /> */}
								<h3>{item.title}</h3>
								<p>{item.status}</p>
							</li>
						))}
					</ul>
				</div>
			</div>
		)
	}
}

const Main = connect(
	mapStateToProps,
	mapDispatchToProps
)(ConnectedMain)

export default Main
