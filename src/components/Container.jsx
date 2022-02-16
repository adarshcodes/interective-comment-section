/* eslint-disable react-hooks/exhaustive-deps */
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
						removeComment={() => removeComment(comment.id)}
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
										removeComment={() => removeComment(replies.id)}
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

		newComment.content = "";
	}

	function removeComment(id) {
		let temp = userData;
		for (let comment of temp.comments) {
			if (comment.id === id) {
				temp.comments = temp.comments.filter(
					(filComment) => filComment.id !== id
				);
				break;
			}
		}
		setUserData({ ...temp });
	}

	function errorMessage() {}

	function conditionalCall() {
		return newComment.content === "" ? errorMessage() : addComment();
	}

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
				addComment={conditionalCall}
				handleTyping={handleTyping}
				newComment={newComment.content}
			/>
		</div>
	);
}

export default Container;
