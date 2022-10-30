import React from "react";
import VoteCounter from "./VoteCounter";
import Tag from "./Tag";

export default function Replies({
	repliesContent,
	replyTo,
	replyTime,
	repliesScore,
	username,
	avatar,
	currentUser,
	deleteReply,
}) {
	return (
		<div className="comment">
			<VoteCounter score={repliesScore} />
			<div className="comment-data">
				<div className="user-data">
					<img className="avatar" src={avatar} alt="avatar" />
					<div className="username">{username}</div>
					{currentUser === username ? <Tag /> : null}
					<div className="comment-time">{replyTime}</div>
					{currentUser === username ? (
						<div className="edit-and-delete">
							<div className="deleteBtn" onClick={deleteReply}>
								<img
									src={`${process.env.PUBLIC_URL}/images/icon-delete.svg`}
									alt="delete-icon"
								/>
								Delete
							</div>

							<div className="editBtn">
								<img
									src={`${process.env.PUBLIC_URL}/images/icon-edit.svg`}
									alt="edit-icon"
								/>
								Edit
							</div>
						</div>
					) : (
						<div className="replyBtn">
							<img
								src={`${process.env.PUBLIC_URL}/images/icon-reply.svg`}
								alt="reply-icon"
							/>
							Reply
						</div>
					)}
				</div>

				<div className="content">
					<span className="replying-to">@{replyTo} </span>
					{`${repliesContent}`}
				</div>
			</div>
		</div>
	);
}
