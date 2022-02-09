// Native import
import React from "react";

// Image import

import Plus from "../assets/images/icon-plus.svg";
import Minus from "../assets/images/icon-minus.svg";

function VoteCounter() {
	return (
		<div className="vote-counter">
			<img src={Plus} alt="upvote" className="vote-counter__votes-icon" />
			<img src={Minus} alt="downvote" className="vote-counter__votes-icon" />
		</div>
	);
}

export default VoteCounter;
