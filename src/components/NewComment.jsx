import React from "react";

export default function NewComment({ avatar }) {
	return (
		<div className="new-comment">
			<img src={avatar} alt="avatar" className="avatar" />
			<textarea
				className="comment-textarea"
				placeholder="Add a comment..."
			></textarea>
			<span className="btn-send">Send</span>
		</div>
	);
}
