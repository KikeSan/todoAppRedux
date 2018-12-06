import React, { Component } from 'react'
import Form from './containers/Form'
import Filter from './containers/Filter'
import List from './containers/List'
import './styles/index.scss'

class App extends Component {
	render() {
		return (
			<div>
				<h1>To Do App</h1>
				<div className="wrapper">
					<div className="form-app">
						<Form />
					</div>
					<div className="list-app">
						<List />
					</div>
					<div className="filter-app">
						<Filter />
					</div>
				</div>
			</div>
		)
	}
}

export default App
