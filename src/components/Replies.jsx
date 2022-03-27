//Native Imports
import React from "react";

// other component import
import VoteCounter from "./VoteCounter";

// image import
import ReplyIcon from "../assets/images/icon-reply.svg";

function Replies(props) {
	const [vote, setVote] = React.useState(props.upvote);

	function increVote() {
		setVote((prevVote) => prevVote + 1);
	}

	function decreVote() {
		setVote((prevVote) => prevVote - 1);
	}

	// Updating comments
	// showing textarea on click to edit
	const [editComment, setEditComment] = React.useState(false);

	function editFunction() {
		setEditComment(!editComment);
		console.log("edit working", editComment);
	}

	function updateFunction() {
		setEditComment(!editComment);
	}

	function duoFunction() {
		props.updateComment();
		updateFunction();
	}

	return (
		<div className="comment replies">
			<VoteCounter incre={increVote} decre={decreVote} count={vote} />

			<div className="comment--user-details">
				<div className="comment--user-info">
					<div className="comment--data">
						<img src={props.avatar} alt="user-avatar" className="avatar" />

						<h3 className="username">
							{props.username}
							{props.username === props.superuser ? <span>you</span> : null}
						</h3>

						<p className="timestamp">{props.timestamp}</p>
					</div>

					{props.username === props.superuser ? (
						<div className="comment--update">
							<div className="comment--update__delete" onClick={props.modal}>
								<i class="fa-solid fa-trash"></i>
								Delete
							</div>
							<div className="comment--update__edit" onClick={editFunction}>
								<i class="fa-solid fa-pen"></i>
								Edit
							</div>
						</div>
					) : (
						<div className="comment--reply">
							<img src={ReplyIcon} alt="reply" className="reply-icon" />
							Reply
						</div>
					)}
				</div>

				{editComment ? (
					<div className="update-last">
						<textarea
							className="new-comment__add-comment comment-textarea comment--comment-text comment-update"
							name="edited"
							defaultValue={props.text}
							onChange={props.handleEditing}
						></textarea>

						<div
							className="new-comment__btn-comment btn-update"
							onClick={duoFunction}
						>
							Update
						</div>
					</div>
				) : (
					<p className="comment--comment-text">{props.text}</p>
				)}
			</div>
		</div>
	);
}

export default Replies;
