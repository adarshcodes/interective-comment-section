//Native Imports
import React from "react";

// other component import
import VoteCounter from "./VoteCounter";

// image import
import ReplyIcon from "../assets/images/icon-reply.svg";
import Avatar from "../assets/images/avatars/image-amyrobson.webp";

function Comment() {
	const [vote, setVote] = React.useState(0);

	function upvote() {
		setVote((prevCount) => prevCount + 1);
		console.log("It's working");
	}

	function downvote() {
		setVote((prevCount) => prevCount - 1);
		console.log("It's working");
	}

	return (
		<div className="comment">
			<VoteCounter incre={upvote} decre={downvote} count={vote} />

			<div className="comment--user-details">
				<div className="comment--user-details__user-info">
					<div className="comment--user-details__user-info__data">
						<img
							src={Avatar}
							alt="user-avatar"
							className="comment--user-details__user-infodata____avatar"
						/>

						<h3 className="comment--user-details__user-info__data__username">
							amyrobson
						</h3>

						<p className="comment--user-details__user-info__data__timestamp">
							1 month ago
						</p>
					</div>
					<div className="comment--user-details__user-info__reply">
						<img src={ReplyIcon} alt="reply" className="reply-icon" />
						Reply
					</div>
				</div>

				<p className="comment--comment-text">
					Impressive! Though it seems the drag feature could be improved. But
					overall it looks incredible. You’ve nailed the design and the
					responsiveness at various breakpoints works really well.
				</p>
			</div>
		</div>
	);
}

export default Comment;
