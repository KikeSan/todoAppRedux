import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";

import firebase from "firebase";

// Initialize Firebase
// TODO: Replace with your project's customized code snippet
var config = {
	apiKey: "AIzaSyAxt-MnqrVcRWrPeAcWYt_ApueQIuiokUU",
	authDomain: "todoapp-c0094.firebaseapp.com",
	databaseURL: "https://todoapp-c0094.firebaseio.com",
	storageBucket: "todoapp-c0094.appspot.com",
};
firebase.initializeApp(config);
var database = firebase.database();
// Get the Auth service for the default app
var defaultAuth = firebase.auth();
console.log('tasks--- ',database.ref().child('tasks').once('value'));
console.log('data: ',firebase.database().ref('tasks/R5DAaoMCNElshKA557l3').once('value'));

database.ref('/databases/tasks').once('value').then(function(snapshot) {
	// The Promise was "fulfilled" (it succeeded).
	console.log('SUCCESS:',snapshot.val());
}, function(error) {
	// The Promise was rejected.
	console.log('ERROR:',error);
});

var leadsRef = firebase.database().ref('tasks/R5DAaoMCNElshKA557l3');
leadsRef.on('value', function(snapshot) {
	//Do something with the data
	console.log('ref-----> ',snapshot.val());
});

import App from "./App";
//import Sidebar from './containers/Sidebar'
import reducers from "./reducers";

const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

const root = document.getElementById("root");
root
	? ReactDOM.render(
			<Provider store={store}>
				<Router>
					<Route path="/" component={App} />
					{/* <App /> */}
				</Router>
			</Provider>,
			root
	  )
	: false;
