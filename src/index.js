import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";

import ToDoList from "./components/ToDoList";

import App from "./App";
//import Sidebar from './containers/Sidebar'
import reducers from "./reducers";

const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

const root = document.getElementById("root");
root
	? ReactDOM.render(
			<Provider store={store}>
				<Router>
					<Route path="/" component={ToDoList } />
					{/* <App /> */}
				</Router>
			</Provider>,
			root
	  )
	: false;
