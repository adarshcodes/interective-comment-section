import React from "react";
import VoteCounter from "./VoteCounter";
import ReplyBtn from "./ReplyBtn";
import DeleteBtn from "./DeleteBtn";
import EditBtn from "./EditBtn";
import Tag from "./Tag";

export default function Replies({
	repliesContent,
	replyTo,
	replyTime,
	repliesScore,
	username,
	avatar,
	currentUser,
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
							<DeleteBtn />
							<EditBtn />
						</div>
					) : (
						<ReplyBtn />
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
