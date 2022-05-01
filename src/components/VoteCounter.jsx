import React from "react";
import "../assets/sass/main.css";

import Plus from "../assets/images/icon-plus.svg";
import Minus from "../assets/images/icon-minus.svg";

export default function VoteCounter() {
	return (
		<div className="vote-counter">
			<div className="vote-counter__vote-icon vote-counter__upvote-icon">
				<img src={Plus} alt="upvote" />
			</div>

			<p className="vote-counter__vote-count">1</p>

			<div className="vote-counter__vote-icon vote-counter__upvote-icon">
				<img src={Minus} alt="downvote" />
			</div>
		</div>
	);
}
