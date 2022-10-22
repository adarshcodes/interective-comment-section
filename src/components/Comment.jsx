import React from "react";
import "../assets/sass/main.css";
import VoteCounter from "./VoteCounter";
import Replies from "./Replies";
import ReplyBtn from "./ReplyBtn";
import DeleteBtn from "./DeleteBtn";
import EditBtn from "./EditBtn";
import Tag from "./Tag";

export default function Comment({
	username,
	avatar,
	content,
	time,
	score,
	haveReplies,
	currentUser,
}) {
	const current = currentUser;
	console.log(current);

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
				currentUser={current}
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
						{current === username ? <Tag /> : null}
						<div className="comment-time">{time}</div>
						{current === username ? (
							<div className="edit-and-delete">
								<DeleteBtn />
								<EditBtn />
							</div>
						) : (
							<ReplyBtn />
						)}
					</div>
					<div className="content">{content}</div>
				</div>
			</div>

			{haveReplies.length > 0 ? (
				<div className="replies-box">{replies}</div>
			) : null}
		</div>
	);
}
