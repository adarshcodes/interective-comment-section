// Native import
import React from "react";

// Component import
import Comment from "./Comment";
import Replies from "./Replies";
import NewComment from "./NewComment";
import UserData from "../userData";

function Container() {
	const [newComment] = React.useState(UserData.currentUser);

	const [commentsData] = React.useState(UserData.comments);

	const comments = commentsData.map((comment) => {
		const haveReply = comment.replies;

		return (
			<div className="comments-holder">
				<Comment
					key={comment.id}
					avatar={comment.user.image.webp}
					username={comment.user.username}
					timestamp={comment.createdAt}
					text={comment.content}
					upvote={comment.score}
					superuser={newComment.username}
				/>

				<div className="replies-holder">
					{haveReply.length > 0
						? haveReply.map((replies) => (
								<Replies
									key="id"
									avatar={replies.user.image.webp}
									username={replies.user.username}
									timestamp={replies.createdAt}
									text={replies.content}
									upvote={replies.score}
									superuser={newComment.username}
								/>
						  ))
						: null}
				</div>
			</div>
		);
	});

	return (
		<div className="container">
			{comments}
			<NewComment
				superuser={newComment.username}
				avatar={newComment.image.webp}
			/>
		</div>
	);
}

export default Container;
