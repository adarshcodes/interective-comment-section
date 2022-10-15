import React, { useState } from "react";
import "../assets/sass/main.css";

export default function VoteCounter({ score }) {
	// creating counter state
	const [votes, setVotes] = useState(score);

	// updating counter value

	function upvote() {
		setVotes((prevCount) => {
			return (prevCount += 1);
		});
	}

	function downvote() {
		setVotes((prevCount) => {
			return (prevCount -= 1);
		});
	}

	return (
		<div className="vote-counter">
			<div
				className="vote-counter__vote-icon vote-counter__upvote-icon"
				onClick={upvote}
			>
				<img
					src={`${process.env.PUBLIC_URL}/images/icon-plus.svg`}
					alt="upvote"
				/>
			</div>

			<p className="vote-counter__vote-count">{votes}</p>

			<div
				className="vote-counter__vote-icon vote-counter__upvote-icon"
				onClick={downvote}
			>
				<img
					src={`${process.env.PUBLIC_URL}/images/icon-minus.svg`}
					alt="downvote"
				/>
			</div>
		</div>
	);
}
