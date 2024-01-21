"use client";

import Image from "next/image";
import React from "react";
import state from "../state";
import { useSnapshot } from "valtio";

interface TabProps {
	tab: {
		name: string;
		icon: string;
	};
	isFilterTab?: boolean;
	isActiveTab?: boolean;
	handleClick: () => void;
}

const Tab: React.FC<TabProps> = ({
	tab,
	isFilterTab,
	isActiveTab,
	handleClick,
}) => {
	const snap = useSnapshot(state);

	const activeStyles =
		isFilterTab && isActiveTab
			? { backgroundColor: snap.color, opacity: 0.5 }
			: { backgroundColor: "transparent", opacity: 1 };

	return (
		<div
			key={tab.name}
			className={`tab-btn ${
				isFilterTab ? "rounded-full glassmorphism" : "rounded-4"
			}`}
			onClick={handleClick}
			style={activeStyles}
		>
			<Image
				width={isFilterTab ? 30 : 40}
				height={isFilterTab ? 30 : 40}
				src={tab.icon}
				alt={tab.name}
				className={`${
					isFilterTab ? "w-2/3 h-2/3" : "w-11/12 h-11/12 object-contain"
				}`}
			/>
		</div>
	);
};

export default Tab;
