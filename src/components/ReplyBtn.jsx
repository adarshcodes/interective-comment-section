import React from "react";

export default function ReplyBtn() {
	return (
		<div className="replyBtn">
			<img
				src={`${process.env.PUBLIC_URL}/images/icon-reply.svg`}
				alt="reply-icon"
			/>
			Reply
		</div>
	);
}
