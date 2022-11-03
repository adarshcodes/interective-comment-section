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
				id={comm.id}
				username={comm.user.username}
				avatar={comm.user.image.webp}
				content={comm.content}
				time={comm.createdAt}
				score={comm.score}
				haveReplies={comm.replies}
				currentUser={data.currentUser.username}
				deleteComment={() => deleteComment(comm.id)}
				deleteReply={deleteComment}
				editComment={editComment}
			/>
		);
	});

	// Adding new Comment

	function addComment(newComment) {
		const temp = data;
		temp.comments.push(newComment);
		setData({ ...temp });
		console.log(newComment.id);
	}

	// Deleting Comment and Reply

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

	// Deleting Reply

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

	// Editing Comment
	function editComment(id, content) {
		const temp = data;

		for (let comment of temp.comments) {
			if (comment.id === id) {
				comment.content = content;
				break;
			} else if (comment?.replies?.length > 0) {
				editReplies(comment.replies, id, content);
			}
		}
		setData({ ...temp });
	}

	function editReplies(replies, id, content) {
		for (let reply of replies) {
			if (reply.id === id) {
				reply.content = content;
				break;
			} else if (reply?.replies?.length > 0) {
				editReplies(reply, reply.replies, id, content);
			}
		}
	}

	return (
		<main className="app">
			<section className="app-container">
				<div className="comment-container">{userComment}</div>
				<NewComment
					avatar={data.currentUser.image.webp}
					addComment={addComment}
					data={data}
				/>
			</section>
		</main>
	);
}

export default App;
