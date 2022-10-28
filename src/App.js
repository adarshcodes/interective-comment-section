// importing native dependencies
import TimeAgo from "javascript-time-ago";
import React, { useEffect } from "react";

// importing Stylesheet
import "./assets/sass/main.css";

// importing Components
import Comment from "./components/Comment";
import NewComment from "./components/NewComment";
import jsonData from "./data.json";

function App() {
	// Getting data
	const [data, setData] = React.useState(jsonData);

	// Rendering Comments

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
				currentUser={data.currentUser.username}
				deleteComment={deleteComment}
			/>
		);
	});

	// Adding new Comment

	function addComment(newComment) {
		const temp = data;
		temp.comments.push(newComment);
		setData({ ...temp });
	}

	// Deleting Comment

	function deleteComment(id) {
		console.log(id);
	}

	return (
		<main className="app">
			<section className="app-container">
				<div className="comment-container">{userComment}</div>
				<NewComment
					avatar={data.currentUser.image.webp}
					// handleComment={handleComment}
					// newComment={newComment}
					addComment={addComment}
					data={data}
				/>
			</section>
		</main>
	);
}

export default App;
