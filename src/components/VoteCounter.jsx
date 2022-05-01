import React, { useState } from "react";
import "../assets/sass/main.css";

import Plus from "../assets/images/icon-plus.svg";
import Minus from "../assets/images/icon-minus.svg";

export default function VoteCounter() {
	// creating counter state
	const [votes, setVotes] = useState(1);

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
				<img src={Plus} alt="upvote" />
			</div>

			<p className="vote-counter__vote-count">{votes}</p>

			<div
				className="vote-counter__vote-icon vote-counter__upvote-icon"
				onClick={downvote}
			>
				<img src={Minus} alt="downvote" />
			</div>
		</div>
	);
}
