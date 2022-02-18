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
						// removeComment={() => removeComment(comment.id)}
						modal={(modal, () => removeComment(comment.id))}
					/>

					{haveReply.length > 0
						? haveReply.map((replies) => (
								<div className="replies-holder">
									<Replies
										key="id"
										avatar={replies.user.image.webp}
										username={replies.user.username}
										timestamp={replies.createdAt}
										text={replies.content}
										upvote={replies.score}
										superuser={currentUser.username}
										// removeComment={() => removeComment(replies.id)}
										modal={(modal, () => removeComment(replies.id))}
									/>
								</div>
						  ))
						: null}
				</div>
			);
		});

		setCommentsData(comments);
	}, [currentUser.username, userData]);

	const [newComment, setNewComment] = React.useState({
		id: nanoid(),
		content: "",
		createdAt: moment().fromNow(),
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

	const [noti, setNoti] = React.useState(false);

	function addComment() {
		setUserData((prevData) => ({
			comments: [...prevData.comments, newComment],
		}));

		setNewComment((prevNewComment) => {
			return {
				...prevNewComment,
				id: nanoid(),
				content: "",
				createdAt: moment().fromNow(),
				score: 0,
				user: {
					image: {
						png: "",
						webp: currentUser.image.webp,
					},
					username: currentUser.username,
				},
				replies: [],
			};
		});

		function showMessage() {
			setNoti(!noti);

			const timeId = setTimeout(() => {
				setNoti(false);
			}, 3000);

			return () => {
				clearTimeout(timeId);
			};
		}

		showMessage();
	}

	const [modalDisplay, setModalDisplay] = React.useState(false);

	function modal() {
		setModalDisplay(true);
	}

	function closeModal() {
		setModalDisplay(false);
	}

	function removeComment(id) {
		let temp = userData;
		for (let comment of temp.comments) {
			if (comment.id === id) {
				temp.comments = temp.comments.filter(
					(filComment) => filComment.id !== id
				);
			} else {
				if (comment?.replies?.length > 0) {
					findCommentToDelete(comment, comment.replies, id);
				}
			}
		}

		setModalDisplay(false);

		return modalDisplay ? setUserData({ ...temp }) : modal();
	}

	const findCommentToDelete = (parent, replies, id) => {
		let temp = parent;
		for (let reply of replies) {
			if (reply.id === id) {
				temp.replies = temp.replies.filter(
					(filComment) => filComment.id !== id
				);
				break;
			} else {
				if (reply?.replies?.length > 0) {
					findCommentToDelete(reply, reply.replies, id);
				}
			}
		}
	};

	function errorMessage() {}

	function conditionalCall() {
		newComment.content === "" ? errorMessage() : addComment();
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
			<div className={modalDisplay ? "modal show-modal" : "modal"}>
				<div className="modal-choice">
					<h3 className="heading-modal">Delete comment</h3>
					<p className="para-modal">
						Are you sure you want to delete this comment? This will remove the
						comment and can’t be undone.
					</p>
					<div className="modal-btns">
						<div className="btn btn-cancle" onClick={closeModal}>
							No, cancle
						</div>
						<div className="btn btn-delete" onClick={removeComment}>
							Yes, Delete
						</div>
					</div>
				</div>
			</div>
			<div className={noti ? "message message-animation" : "message"}>
				🎉Comment added successfully!
			</div>
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
