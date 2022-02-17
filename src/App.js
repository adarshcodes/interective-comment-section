import React from "react";
import "./assets/sass/main.css";
import Container from "./components/Container";

function App() {
	return (
		<div className="app-container">
			<main className="app">
				<div className="message">This is a notification</div>
				<Container />
			</main>
		</div>
	);
}

export default App;
