import React from "react";
import { nanoid } from "nanoid";
import moment from "moment";

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
		setNullStyle(false);
	}

	const [nullStyle, setNullStyle] = React.useState(false);

	function validateComment() {
		if (newComment.content) {
			addComment(newComment);
			setNullStyle(false);
		} else {
			setNullStyle(true);
		}
	}

	function clearComment() {
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
				className={`comment-textarea ${nullStyle ? "blank-validation" : null}`}
				placeholder="Add a comment..."
				onChange={handleComment}
				value={content}
			></textarea>
			<span
				className="btn-send"
				onClick={() => {
					validateComment();
					setContent("");
					clearComment();
				}}
			>
				Send
			</span>
		</div>
	);
}
