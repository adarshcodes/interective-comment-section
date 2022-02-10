//Native Imports
import React from "react";

// other component import
import VoteCounter from "./VoteCounter";

// image import
import ReplyIcon from "../assets/images/icon-reply.svg";

function Comment(props) {
	const [vote, setVote] = React.useState(0);

	function upvote() {
		setVote((prevCount) => prevCount + 1);
	}

	function downvote() {
		setVote((prevCount) => prevCount - 1);
	}

	console.log(props.avatar);

	return (
		<div className="comment">
			<VoteCounter incre={upvote} decre={downvote} count={vote} />

			<div className="comment--user-details">
				<div className="comment--user-info">
					<div className="comment--data">
						<img src={props.avatar} alt="user-avatar" className="avatar" />

						<h3 className="username">{props.username}</h3>

						<p className="timestamp">{props.timestamp}</p>
					</div>
					<div className="comment--reply">
						<img src={ReplyIcon} alt="reply" className="reply-icon" />
						Reply
					</div>
				</div>

				<p className="comment--comment-text">{props.text}</p>
			</div>
		</div>
	);
}

export default Comment;
