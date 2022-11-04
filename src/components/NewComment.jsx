import React from "react";
import { nanoid } from "nanoid";
import moment from "moment";
import { clear } from "@testing-library/user-event/dist/clear";

export default function NewComment({ avatar, data, addComment }) {
	const [content, setContent] = React.useState("");

	const timeago = moment(data.created_at).fromNow();

	const [newComment, setNewComment] = React.useState({
		id: "",
		content: content,
		createdAt: "",
		score: 0,
		user: {
			image: {
				webp: data.currentUser.image.webp,
			},
			username: data.currentUser.username,
		},
		replies: [],
	});

	function handleComment(event) {
		setNewComment((prevComment) => {
			return {
				...prevComment,
				content: event.target.value,
				id: nanoid(),
				createdAt: timeago,
			};
		});

		setContent(event.target.value);
	}

	function clearState() {
		setNewComment((prevComment) => {
			return {
				...prevComment,
				content: "",
				id: "",
				createdAt: "",
			};
		});
	}

	return (
		<div className="new-comment">
			<img src={avatar} alt="avatar" className="avatar" />
			<textarea
				className="comment-textarea"
				placeholder="Add a comment..."
				onChange={handleComment}
				value={content}
			></textarea>
			<span
				className="btn-send"
				onClick={() => {
					addComment(newComment);
					setContent("");
					clearState();
				}}
			>
				Send
			</span>
		</div>
	);
}
