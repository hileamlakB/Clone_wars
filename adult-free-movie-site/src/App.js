import React from "react";
import "./App.css";

import Row from "./Components/Row";
import Banner from "./Components/Banner";
import Nav from "./Components/Nav";
import request from "./util/request";

function App() {
	return (
		<div className="app">
			<Nav />
			<Banner />
			<Row title="Action" fetchUrl={request.fetchAction} isLargeRow />
			{/* <Row title="Netflix Originals" fetchUrl={request.fetchNetflix} isLargeRow /> */}
			<Row title="Animation" fetchUrl={request.fetchAnim} />
			<Row title="Family" fetchUrl={request.fetchFamily} />
			<Row title="Adventure" fetchUrl={request.fetchAdventure} />
			<Row title="Sci-fi" fetchUrl={request.fetchScifi} />
		</div>
	);
}

export default App;
