"use client";

import React from "react";
import { getContrastingColor } from "../config/helpers";
import state from "../state";
import { useSnapshot } from "valtio";

interface CustomButtonProps {
	type: "filled" | "outline";
	title: string;
	customStyles?: string;
	handleClick: () => void;
}

const CustomButton: React.FC<CustomButtonProps> = ({
	type,
	title,
	customStyles,
	handleClick,
}) => {
	const snap = useSnapshot(state);

	const generateStyle = (type: "filled" | "outline") => {
		if (type === "filled") {
			return {
				backgroundColor: snap.color,
				color: getContrastingColor(snap.color),
			};
		} else if (type === "outline") {
			return {
				borderWidth: "1px",
				borderColor: snap.color,
				color: snap.color,
			};
		}
	};

	return (
		<button
			className={`px-2 py-1.5 flex-1 rounded-md ${customStyles}`}
			style={generateStyle(type)}
			onClick={handleClick}
		>
			{title}
		</button>
	);
};

export default CustomButton;
