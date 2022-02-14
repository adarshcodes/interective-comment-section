// Native import
import React from "react";
import moment from "moment";
import { nanoid } from "nanoid";

// Component import
import Comment from "./Comment";
import Replies from "./Replies";
import NewComment from "./NewComment";
import UserData from "../userData";

function Container() {
	// Working on data fetch

	const [currentUser] = React.useState(UserData.currentUser);

	const [userData, setUserData] = React.useState(UserData);

	const [commentsData, setCommentsData] = React.useState();

	React.useEffect(() => {
		const comments = userData.comments.map((comment) => {
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
						superuser={currentUser.username}
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
										superuser={currentUser.username}
									/>
							  ))
							: null}
					</div>
				</div>
			);
		});

		setCommentsData(comments);
	}, [currentUser.username, userData]);

	const date = new Date();

	console.log();

	const [newComment, setNewComment] = React.useState({
		id: nanoid(),
		content: "",
		createdAt: moment(date, "YYYYMMDD").fromNow(),
		score: 0,
		user: {
			image: {
				png: "",
				webp: currentUser.image.webp,
			},
			username: currentUser.username,
		},
		replies: [],
	});

	function addComment() {
		setUserData((prevData) => ({
			comments: [...prevData.comments, newComment],
		}));
	}

	console.log(userData.comments);

	function handleTyping(event) {
		setNewComment((prevCommentData) => {
			return {
				...prevCommentData,
				[event.target.name]: event.target.value,
			};
		});
	}

	return (
		<div className="container">
			{commentsData}
			<NewComment
				superuser={currentUser.username}
				avatar={currentUser.image.webp}
				addComment={addComment}
				handleTyping={handleTyping}
				newComment={newComment.content}
			/>
		</div>
	);
}

export default Container;
