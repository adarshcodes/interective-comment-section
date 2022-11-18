import React from "react";
import moment from "moment/moment";
import { nanoid } from "nanoid";

export default function NewReply({
	avatar,
	data,
	replyingToId,
	replyingToUser,
	addReply,
	setVisibility,
}) {
	const [content, setContent] = React.useState("");

	const timeago = moment(data.created_at).fromNow();

	const [newReply, setNewReply] = React.useState({
		id: "",
		content: content,
		createdAt: "",
		score: 0,
		replyingTo: "",
		user: {
			image: {
				webp: data.currentUser.image.webp,
			},
			username: data.currentUser.username,
		},
		replies: [],
	});

	function handleReply(e) {
		setNewReply((prevRep) => {
			return {
				...prevRep,
				id: nanoid(),
				content: e.target.value,
				createdAt: timeago,
				replyingTo: replyingToUser,
			};
		});

		setContent(e.target.value);
	}

	console.log(newReply);
	console.log(replyingToId);

	return (
		<div className="new-reply new-comment">
			<img src={avatar} alt="avatar" className="avatar" />
			<textarea
				className="comment-textarea"
				placeholder="Add a comment..."
				value={content}
				onChange={handleReply}
			></textarea>
			<span
				className="btn-send"
				onClick={() => {
					addReply(replyingToId, newReply);
					setContent("");
					setVisibility(false);
				}}
			>
				Reply
			</span>
		</div>
	);
}
