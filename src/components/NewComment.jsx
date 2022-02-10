// native import
import React from "react";

// image import
import currentUser from "../assets/images/avatars/image-juliusomo.webp";

function NewComment() {
	return (
		<div className="new-comment">
			<img
				src={currentUser}
				alt="user-avatar"
				className="new-comment__avatar"
			/>
			<div className="new-comment__form">
				<textarea
					name="add-comment"
					id="add-comment"
					className="new-comment__add-comment"
					placeholder="Add a comment..."
				></textarea>
			</div>
			<div className="new-comment__btn-comment">Send</div>
		</div>
	);
}

export default NewComment;
