import firebase from 'firebase'

//let initialState = {}

// Initialize Firebase
// TODO: Replace with your project's customized code snippet
var config = {
	apiKey: 'AIzaSyAxt-MnqrVcRWrPeAcWYt_ApueQIuiokUU',
	authDomain: 'todoapp-c0094.firebaseapp.com',
	databaseURL: 'https://todoapp-c0094.firebaseio.com',
	projectId: 'todoapp-c0094',
	storageBucket: 'todoapp-c0094.appspot.com',
	messagingSenderId: '372140339810'
}
var defaultApp = firebase.initializeApp(config)
console.log(defaultApp.name)
var starCountRef = firebase.database().ref()
/* starCountRef.on('value', function(snapshot) {
	console.log('result:::', snapshot.val())
}) */
export const todosRef = starCountRef.child('tasks')