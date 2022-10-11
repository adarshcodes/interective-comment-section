import React from "react";
import VoteCounter from "./VoteCounter";

export default function Replies({
	repliesContent,
	replyTo,
	replyTime,
	repliesScore,
	username,
	avatar,
}) {
	return (
		<div>
			<VoteCounter score={repliesScore} />
			<img src={avatar} alt="avatar" />
			<div>{username}</div>
			<div>{replyTime}</div>
			<div>@{replyTo}</div>
			<div>{repliesContent}</div>
		</div>
	);
}
