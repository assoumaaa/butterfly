"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ColorPicker, CustomButton, Tab, TextureLogoPicker } from ".";
import {
	DecalTypes,
	EditorTabs,
	FilterTabNames,
	FilterTabs,
	texturesLogos,
} from "../config/constants";
import React, { useEffect, useState } from "react";
import { downloadCanvasToImage, reader } from "../config/helpers";
import { fadeAnimation, slideAnimation } from "../config/motion";

import LogoControls from "../canvas/LogoControl";
import TextControls from "../canvas/TextControl";
import { TextureLogo } from "./TextureLogoPicker";
import state from "../state";
import { useSnapshot } from "valtio";

const Customizer = () => {
	const snap = useSnapshot(state);

	const [file, setFile] = useState<File | null>(null);

	const [activeEditorTab, setActiveEditorTab] = useState("");
	const [activeFilterTab, setActiveFilterTab] = useState({
		frontLogoShirt: true,
		backLogoShirt: true,
		frontTextShirt: true,
		backTextShirt: true,
		stylishShirt: false,
		downloadShirt: false,
	});

	// show tab content depending on the activeTab
	const generateTabContent = () => {
		switch (activeEditorTab) {
			case "colorpicker":
				return <ColorPicker />;
			case "filepicker":

			case "logocontrols":
				return <LogoControls />;
			case "textcontrols":
				return <TextControls />;
			case "texturelogopicker":
				return (
					<TextureLogoPicker
						texturesLogos={texturesLogos}
						handleTextureLogoClick={handleTextureLogoClick}
					/>
				);
			default:
				return null;
		}
	};

	const handleTextureLogoClick = (textureLogo: TextureLogo) => {
		// update the state with the selected texture or logo
		if (textureLogo.type === "texture") {
			// update the state with the selected texture
			state.fullDecal = textureLogo.image;
		} else if (textureLogo.type === "frontLogo") {
			// update the state with the selected logo
			state.frontLogoDecal = textureLogo.image;
		} else if (textureLogo.type === "backLogo") {
			// update the state with the selected logo
			state.backLogoDecal = textureLogo.image;
		}
	};

	type StateKeys = keyof typeof state;

	const handleActiveFilterTab = (tabName: FilterTabNames) => {
		switch (tabName) {
			case "frontLogoShirt":
				state.isFrontLogoTexture = !activeFilterTab[tabName];
				break;
			case "backLogoShirt":
				state.isBackLogoTexture = !activeFilterTab[tabName];
				break;
			case "frontTextShirt":
				state.isFrontText = !activeFilterTab[tabName];
				break;
			case "backTextShirt":
				state.isBackText = !activeFilterTab[tabName];
				break;
			case "stylishShirt":
				state.isFullTexture = !activeFilterTab[tabName];
				break;
			case "downloadShirt":
				downloadCanvasToImage();
				break;
			default:
				state.isFrontLogoTexture = true;
				state.isBackLogoTexture = true;
				state.isFrontText = true;
				state.isBackText = true;
				state.isFullTexture = false;
				break;
		}

		// after setting the state, activeFilterTab is updated
		setActiveFilterTab((prevState) => {
			return {
				...prevState,
				[tabName]: !prevState[tabName],
			};
		});
	};

	return (
		<AnimatePresence>
			<motion.div
				key="custom"
				className="absolute top-0 left-0 z-10"
				{...slideAnimation("left")}
			>
				<div className="flex items-center min-h-screen">
					<div className="editortabs-container tabs">
						{EditorTabs.map((tab) => (
							<Tab
								key={tab.name}
								tab={tab}
								handleClick={() => setActiveEditorTab(tab.name)}
							/>
						))}

						{generateTabContent()}
					</div>
				</div>
			</motion.div>

			<motion.div className="filtertabs-container" {...slideAnimation("up")}>
				{FilterTabs.map((tab) => (
					<Tab
						key={tab.name}
						tab={tab}
						isFilterTab
						isActiveTab={activeFilterTab[tab.name]}
						handleClick={() => handleActiveFilterTab(tab.name)}
					/>
				))}
			</motion.div>
		</AnimatePresence>
	);
};

export default Customizer;
