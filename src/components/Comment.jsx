import React from "react";
import "../assets/sass/main.css";
import VoteCounter from "./VoteCounter";
import Replies from "./Replies";
import Tag from "./Tag";

export default function Comment({
	username,
	avatar,
	content,
	time,
	score,
	haveReplies,
	currentUser,
	deleteComment,
	deleteReply,
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
				currentUser={currentUser}
				deleteReply={() => deleteReply(rep.id)}
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
						{currentUser === username ? <Tag /> : null}
						<div className="comment-time">{time}</div>
						{currentUser === username ? (
							<div className="edit-and-delete">
								<div className="deleteBtn" onClick={deleteComment}>
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
					<div className="content">{content}</div>
				</div>
			</div>

			{haveReplies.length > 0 ? (
				<div className="replies-box">{replies}</div>
			) : null}
		</div>
	);
}
