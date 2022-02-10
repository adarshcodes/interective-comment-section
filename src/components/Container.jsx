// Native import
import React from "react";

// Component import
import Comment from "./Comment";
import UserData from "../userData";

function Container() {
	const [commentsData] = React.useState(UserData.comments);

	const comments = commentsData.map((comment) => (
		<Comment
			key={comment.id}
			avatar={comment.user.image.webp}
			username={comment.user.username}
			timestamp={comment.createdAt}
			text={comment.content}
		/>
	));

	return <div className="container">{comments}</div>;
}

export default Container;
