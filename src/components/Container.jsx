// Native import
import React from "react";

// Component import
import Comment from "./Comment";
import Replies from "./Replies";
import UserData from "../userData";

function Container() {
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
				/>

				{haveReply.length > 0
					? haveReply.map((replies) => (
							<Replies
								key="id"
								avatar={replies.user.image.webp}
								username={replies.user.username}
								timestamp={replies.createdAt}
								text={replies.content}
								upvote={replies.score}
							/>
					  ))
					: null}
			</div>
		);
	});

	return <div className="container">{comments}</div>;
}

export default Container;
