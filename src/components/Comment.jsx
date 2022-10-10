import React from "react";
import "../assets/sass/main.css";
import VoteCounter from "./VoteCounter";
import Replies from "./Replies";

export default function Comment({
	username,
	avatar,
	content,
	time,
	score,
	haveReplies,
}) {
	const replies = haveReplies.map((rep) => {
		return (
			<Replies
				key={rep.id}
				replyTime={rep.createdAt}
				repliesScore={rep.score}
				username={rep.user.username}
				avatar={rep.user.image.webp}
				repliesContent={rep.content}
				replyTo={rep.replyingTo}
			/>
		);
	});
	return (
		<div>
			<VoteCounter score={score} />
			<img src={avatar} alt="avatar" />
			<div>{username}</div>
			<div>{time}</div>
			<div>{content}</div>
			{haveReplies ? replies : null}
		</div>
	);
}
