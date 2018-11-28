import React, { Component } from 'react'
import Sidebar from './containers/Sidebar'
import Main from './containers/Main'
import './styles/index.scss'

class App extends Component {
	render() {
		return (
			<div className="wrapper">
				<div className="sidebar-app">
					<Sidebar />
				</div>
				<div className="main-app">
					<Main />
				</div>
			</div>
		)
	}
}

export default App
