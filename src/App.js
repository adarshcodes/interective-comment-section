// importing native dependencies
import React from "react";

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
				deleteComment={() => deleteComment(comm.id)}
				deleteReply={deleteComment}
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
		const temp = data;

		for (let comment of temp.comments) {
			if (comment.id === id) {
				temp.comments = temp.comments.filter(
					(filComment) => filComment.id !== id
				);
				break;
			} else if (comment?.replies?.length > 0) {
				deleteReply(comment, comment.replies, id);
			}
		}

		setData({ ...temp });
	}

	function deleteReply(comment, replies, id) {
		const temp = comment;
		for (let reply of replies) {
			if (reply.id === id) {
				temp.replies = temp.replies.filter(
					(filterReply) => filterReply.id !== id
				);
				break;
			} else if (reply?.replies?.length > 0) {
				deleteReply(reply, reply.replies, id);
			}
		}
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
