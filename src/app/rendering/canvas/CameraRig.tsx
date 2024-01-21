"use client";

import React, { ReactNode, useEffect } from "react";

import { useThree } from "@react-three/fiber";

interface CameraRigProps {
	children: ReactNode;
}

const CameraRig: React.FC<CameraRigProps> = ({ children }) => {
	const { camera } = useThree();

	useEffect(() => {
		const isBreakpoint = window.innerWidth <= 1260;
		const isMobile = window.innerWidth <= 600;

		// set the initial position of the model
		let targetPosition: [number, number, number] = [-0.4, 0, 2];
		if (isBreakpoint) targetPosition = [0, 0, 2];
		if (isMobile) targetPosition = [0, 0.2, 2.5];

		// set model camera position
		camera.position.set(...targetPosition);
	}, [camera]);

	return <>{children}</>;
};

export default CameraRig;
