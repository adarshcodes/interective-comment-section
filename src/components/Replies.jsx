import React from "react";
import VoteCounter from "./VoteCounter";
import Tag from "./Tag";
import NewReply from "./NewReply";

export default function Replies({
	id,
	repliesContent,
	replyTo,
	replyToId,
	replyTime,
	repliesScore,
	username,
	avatar,
	currentUser,
	deleteReply,
	editReplies,
	currentUserData,
	addReply,
	data,
}) {
	// Adding Edit State
	const [edit, setEdit] = React.useState(false);
	const [reply, setReply] = React.useState(false);

	return (
		<div className="replies-container">
			<div className="comment">
				<VoteCounter score={repliesScore} />
				<div className="comment-data">
					<div className="user-data">
						<img className="avatar" src={avatar} alt="avatar" />
						<div className="username">{username}</div>
						{currentUser === username ? <Tag /> : null}
						<div className="comment-time">{replyTime}</div>
						{currentUser === username ? (
							<div className="edit-and-delete desktop-version">
								<div className="deleteBtn" onClick={deleteReply}>
									<img
										src={`${process.env.PUBLIC_URL}/images/icon-delete.svg`}
										alt="delete-icon"
									/>
									Delete
								</div>

								<div
									className="editBtn"
									onClick={() => {
										setEdit(repliesContent);
									}}
								>
									<img
										src={`${process.env.PUBLIC_URL}/images/icon-edit.svg`}
										alt="edit-icon"
									/>
									Edit
								</div>
							</div>
						) : (
							<div
								className="replyBtn desktop-version"
								onClick={() => {
									setReply(!reply);
								}}
							>
								<img
									src={`${process.env.PUBLIC_URL}/images/icon-reply.svg`}
									alt="reply-icon"
								/>
								Reply
							</div>
						)}
					</div>

					<div className="content">
						{!edit ? (
							<div className="content-text">
								<span className="replying-to">@{replyTo} </span>
								{`${repliesContent}`}
							</div>
						) : (
							<div className="edit-content">
								<textarea
									className="update-textarea comment-textarea"
									value={edit}
									onChange={(e) => setEdit(e.target.value)}
								></textarea>
								<span
									className="btn-update btn-send"
									onClick={() => {
										editReplies(id, edit);
										setEdit(false);
									}}
								>
									Update
								</span>
							</div>
						)}
					</div>
				</div>

				<div className="reply-mobile">
					<VoteCounter score={repliesScore} mobileVersion={"mobileVersion"} />

					{currentUser === username ? (
						<div className="edit-and-delete">
							<div className="deleteBtn" onClick={deleteReply}>
								<img
									src={`${process.env.PUBLIC_URL}/images/icon-delete.svg`}
									alt="delete-icon"
								/>
								Delete
							</div>

							<div
								className="editBtn"
								onClick={() => {
									setEdit(repliesContent);
								}}
							>
								<img
									src={`${process.env.PUBLIC_URL}/images/icon-edit.svg`}
									alt="edit-icon"
								/>
								Edit
							</div>
						</div>
					) : (
						<div
							className="replyBtn "
							onClick={() => {
								setReply(!reply);
							}}
						>
							<img
								src={`${process.env.PUBLIC_URL}/images/icon-reply.svg`}
								alt="reply-icon"
							/>
							Reply
						</div>
					)}
				</div>
			</div>

			{reply ? (
				<NewReply
					data={data}
					avatar={currentUserData.image.webp}
					contentData={repliesContent}
					addReply={addReply}
					replyingToId={replyToId}
					replyingToUser={replyTo}
				/>
			) : null}
		</div>
	);
}
