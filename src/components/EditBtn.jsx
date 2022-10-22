import React from "react";

export default function EditBtn() {
	return (
		<div className="editBtn">
			<img
				src={`${process.env.PUBLIC_URL}/images/icon-edit.svg`}
				alt="edit-icon"
			/>
			Edit
		</div>
	);
}
