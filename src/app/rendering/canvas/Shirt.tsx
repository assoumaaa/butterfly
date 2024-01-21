"use client";

import * as THREE from "three";

import { Decal, OrbitControls, useGLTF, useTexture } from "@react-three/drei";
import { Euler, useFrame, useThree } from "@react-three/fiber";

import React from "react";
import { easing } from "maath";
import state from "../state";
import { useSnapshot } from "valtio";

interface TextTextureProps {
	text: string;
	font: string;
	size: number;
	color: string;
}

const Shirt = () => {
	const snap = useSnapshot(state);
	const { nodes, materials } = useGLTF("/shirt.glb") as any;

	const logoTexture = useTexture(snap.frontLogoDecal);
	const fullTexture = useTexture(snap.fullDecal);
	const backLogoTexture = useTexture(snap.backLogoDecal);

	useFrame((state, delta) =>
		easing.dampC(materials.lambert1.color, snap.color, 0.25, delta)
	);

	const stateString = JSON.stringify(snap);

	const createTextTexture = ({
		text,
		font,
		size,
		color,
	}: TextTextureProps): THREE.CanvasTexture => {
		const canvas = document.createElement("canvas");
		const ctx = canvas.getContext("2d");
		if (!ctx) {
			throw new Error("Canvas 2D context is not available");
		}

		ctx.font = `${size}px ${font}`;
		const textWidth = ctx.measureText(text).width;
		canvas.width = textWidth;
		canvas.height = size;
		ctx.fillStyle = color;
		ctx.font = `${size}px ${font}`;
		ctx.fillText(text, 0, size);
		return new THREE.CanvasTexture(canvas);
	};

	return (	
		<>
			<OrbitControls />
			<group key={stateString}>
				<mesh
					geometry={nodes.T_Shirt_male.geometry}
					material={materials.lambert1}
					// material-roughness={0}
					material-metalness={0.1}
					dispose={null}
				>
					{snap.isFullTexture && (
						<Decal
							position={[0, 0, 0]}
							rotation={[0, 0, 0]}
							scale={1}
							map={fullTexture}
							depthTest={false}
						/>
					)}

					{snap.isFrontLogoTexture && (
						<Decal
							position={snap.frontLogoPosition}
							rotation={[0, 0, 0]}
							scale={snap.frontLogoScale}
							map={logoTexture}
							depthTest={false}
						/>
					)}
					{snap.isFrontText && (
						<Decal
							position={snap.frontTextPosition}
							rotation={[...snap.frontTextRotation]}
							scale={snap.frontTextScale}
							map={createTextTexture({
								text: snap.frontText,
								font: snap.frontTextFont,
								size: snap.frontTextSize,
								color: snap.frontTextColor,
							})}
						/>
					)}

					{snap.isBackLogoTexture && (
						<Decal
							position={snap.backLogoPosition}
							rotation={[...snap.backLogoRotation]}
							scale={snap.backLogoScale}
							map={backLogoTexture}
							depthTest={false}
						/>
					)}

					{snap.isBackText && (
						<Decal
							position={snap.backTextPosition}
							rotation={[...snap.backTextRotation]}
							scale={snap.backTextScale}
							map={createTextTexture({
								text: snap.backText,
								font: snap.backTextFont,
								size: snap.backTextSize,
								color: snap.backTextColor,
							})}
						/>
					)}
				</mesh>
			</group>
		</>
	);
};

export default Shirt;
