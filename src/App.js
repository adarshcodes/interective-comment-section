// importing native dependencies
import React from "react";

// importing Stylesheet
import "./assets/sass/main.css";

// importing Components
import Comment from "./components/Comment";
import jsonData from "./data.json";

function App() {
	const [data, setData] = React.useState(jsonData);

	const userComment = data.comments.map((comm) => {
		return (
			<Comment
				key={comm.id}
				username={comm.user.username}
				avatar={comm.user.image.webp}
				content={comm.content}
				time={comm.createdAt}
				score={comm.score}
				haveReplies={comm.replies}
			/>
		);
	});
	return (
		<main className="app">
			<section className="app-container">{userComment}</section>
		</main>
	);
}

export default App;
