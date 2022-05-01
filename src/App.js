// importing native dependencies
import React from "react";

// importing Stylesheet
import "./assets/sass/main.css";

// importing Components
import Comment from "./components/Comment";

function App() {
	return (
		<main className="app">
			<section className="app-container">
				<Comment />
			</section>
		</main>
	);
}

export default App;
