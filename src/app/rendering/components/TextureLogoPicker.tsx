"use client";

import Image from "next/image";
import React from "react";

export interface TextureLogo {
	name: string;
	image: string;
	type: string;
}

interface TextureLogoPickerProps {
	texturesLogos: TextureLogo[];
	handleTextureLogoClick: (textureLogo: TextureLogo) => void;
}

const TextureLogoPicker: React.FC<TextureLogoPickerProps> = ({
	texturesLogos,
	handleTextureLogoClick,
}) => {
	const textures = texturesLogos.filter(
		(textureLogo) => textureLogo.type === "texture"
	);
	const frontLogos = texturesLogos.filter(
		(textureLogo) => textureLogo.type === "frontLogo"
	);
	const backLogos = texturesLogos.filter(
		(textureLogo) => textureLogo.type === "backLogo"
	);
	const renderImages = (images: TextureLogo[]) => {
		return (
			<div className="grid grid-cols-2 gap-2">
				{images.map((image, index) => (
					<div key={image.name} onClick={() => handleTextureLogoClick(image)}>
						<Image
							width={40}
							height={40}
							src={image.image}
							alt={image.name}
							className="rounded-full w-full"
						/>
					</div>
				))}
			</div>
		);
	};

	return (
		<div className="absolute left-full ml-3">
			<h2>Textures</h2>
			<div className="flex flex-wrap overflow-y-scroll w-40 h-40">
				{renderImages(textures)}
			</div>
			<h2>Front Logos</h2>
			<div className="flex flex-wrap overflow-y-scroll w-40 h-40">
				{renderImages(frontLogos)}
			</div>
			<h2>Back Logos</h2>
			<div className="flex flex-wrap overflow-y-scroll w-40 h-40">
				{renderImages(backLogos)}
			</div>
		</div>
	);
};

export default TextureLogoPicker;
