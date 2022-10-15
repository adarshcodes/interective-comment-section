import React from "react";
import VoteCounter from "./VoteCounter";
import ReplyBtn from "./ReplyBtn";

export default function Replies({
	repliesContent,
	replyTo,
	replyTime,
	repliesScore,
	username,
	avatar,
}) {
	return (
		<div className="comment">
			<VoteCounter score={repliesScore} />
			<div className="comment-data">
				<div className="user-data">
					<img className="avatar" src={avatar} alt="avatar" />
					<div className="username">{username}</div>
					<div className="comment-time">{replyTime}</div>
					<ReplyBtn />
				</div>

				<div className="content">
					<span className="replying-to">@{replyTo} </span>
					{`${repliesContent}`}
				</div>
			</div>
		</div>
	);
}
