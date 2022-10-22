import React from "react";

export default function DeleteBtn() {
	return (
		<div className="deleteBtn">
			<img
				src={`${process.env.PUBLIC_URL}/images/icon-delete.svg`}
				alt="delete-icon"
			/>
			Delete
		</div>
	);
}
