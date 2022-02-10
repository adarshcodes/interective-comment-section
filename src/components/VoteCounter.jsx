// Native import
import React from "react";

// Image import

import Plus from "../assets/images/icon-plus.svg";
import Minus from "../assets/images/icon-minus.svg";

function VoteCounter(props) {
	return (
		<div className="vote-counter">
			<div
				className="vote-counter__vote-icon vote-counter__upvote-icon"
				onClick={props.incre}
			>
				<img src={Plus} alt="upvote" />
			</div>

			<p className="vote-counter__vote-count">{props.count}</p>

			<div
				className="vote-counter__vote-icon vote-counter__upvote-icon"
				onClick={props.decre}
			>
				<img src={Minus} alt="downvote" />
			</div>
		</div>
	);
}

export default VoteCounter;
