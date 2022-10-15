import React from "react";
import "../assets/sass/main.css";
import VoteCounter from "./VoteCounter";
import Replies from "./Replies";
import ReplyBtn from "./ReplyBtn";

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
		<div className="comment-box">
			<div className="comment">
				<VoteCounter score={score} />
				<div className="comment-data">
					<div className="user-data">
						<img src={avatar} alt="avatar" className="avatar" />
						<div className="username">{username}</div>
						<div className="comment-time">{time}</div>
						<ReplyBtn />
					</div>
					<div className="content">{content}</div>
				</div>
			</div>

			<div className="replies-box">{haveReplies ? replies : null}</div>
		</div>
	);
}
