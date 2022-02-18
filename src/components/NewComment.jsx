// native import
import React from "react";
// image import

function NewComment(props) {
	return (
		<div className="new-comment">
			<img
				src={props.avatar}
				alt="user-avatar"
				className="new-comment__avatar"
			/>
			<div className="new-comment__form">
				<textarea
					className="new-comment__add-comment comment-textarea"
					placeholder="Add a comment..."
					name="content"
					value={props.newComment}
					onChange={props.handleTyping}
				></textarea>
			</div>
			<div className="new-comment__btn-comment" onClick={props.addComment}>
				Send
			</div>
		</div>
	);
}

export default NewComment;
