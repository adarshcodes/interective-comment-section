import React from "react";
import "../assets/sass/main.css";
import VoteCounter from "./VoteCounter";

export default function Comment() {
	return (
		<div className="comment-box">
			<VoteCounter />
		</div>
	);
}
