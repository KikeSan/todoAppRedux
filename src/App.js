import React, { Component } from "react";
import Form from "./containers/Form";
import Filter from "./containers/Filter";
import List from "./containers/List";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTasks, faChevronLeft, faChevronRight, faHeart } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import "./styles/index.scss";
import { Switch, Route } from "react-router-dom";

library.add(faTasks, faChevronLeft, faChevronRight, fab, faHeart);

class App extends Component {
	render() {
		return (
			<div>
				<h1>
					<span className="icon-title">
						<FontAwesomeIcon icon="tasks" size="sm" />
					</span>
					To Do App
				</h1>
				<div className="wrapper">
					<div className="form-app">
						<Form />
					</div>
					{/* <div className="list-app">
						<List />
					</div> */}
					<div className="list-app">
						<Route path="/" component={List} />
					</div>
					<div className="filter-app">
						<Filter />
					</div>
				</div>
				<div className="credits">
					<FontAwesomeIcon icon="chevron-left" />
					<FontAwesomeIcon icon="chevron-right" />
					<span className="credit-text">with</span>
					<FontAwesomeIcon icon="heart" />
					<span className="credit-text">and</span>
					<FontAwesomeIcon icon={["fab", "react"]} size="lg" />
					<span className="credit-text">by Kike</span>
				</div>
			</div>
		);
	}
}

export default App;
