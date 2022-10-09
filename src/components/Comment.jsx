import React from "react";
import "../assets/sass/main.css";
import VoteCounter from "./VoteCounter";

export default function Comment({ content, time, score }) {
	return (
		<div>
			<VoteCounter score={score} />
			<div>{content}</div>
			<div>{time}</div>
			<div>{score}</div>
		</div>
	);
}
