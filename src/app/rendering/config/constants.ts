import {
	download,
	fileIcon,
	logo1,
	logo2,
	logoControls,
	logoShirt,
	stylishShirt,
	swatch,
	textIcon,
	texture1,
	texture2,
	texture3,
	texture4,
	texture5,
	textureLogoPicker,
} from "../assets";

export const EditorTabs = [
	{
		name: "colorpicker",
		icon: swatch.src,
	},
	{
		name: "filepicker",
		icon: fileIcon.src,
	},
	{
		name: "logocontrols",
		icon: logoControls.src,
	},
	{
		name: "textcontrols",
		icon: textIcon.src,
	},
	{
		name: "texturelogopicker",
		icon: textureLogoPicker.src,
	},
];

export type FilterTabNames =
	| "frontLogoShirt"
	| "backLogoShirt"
	| "frontTextShirt"
	| "backTextShirt"
	| "stylishShirt"
	| "downloadShirt";

export const FilterTabs: { name: FilterTabNames; icon: string }[] = [
	{
		name: "frontLogoShirt",
		icon: logoShirt.src,
	},
	{
		name: "backLogoShirt",
		icon: logoShirt.src,
	},
	{
		name: "frontTextShirt",
		icon: textIcon.src,
	},
	{
		name: "backTextShirt",
		icon: textIcon.src,
	},
	{
		name: "stylishShirt",
		icon: stylishShirt.src,
	},
	{
		name: "downloadShirt",
		icon: download.src,
	},
];

export const DecalTypes = {
	frontLogo: {
		stateProperty: "frontLogoDecal",
		filterTab: "logoShirt",
	},
	backLogo: {
		stateProperty: "backLogoDecal",
		filterTab: "logoShirt",
	},
	full: {
		stateProperty: "fullDecal",
		filterTab: "stylishShirt",
	},
};

export const texturesLogos = [
	{
		name: "Texture 1",
		image: texture1.src,
		type: "texture",
	},
	{
		name: "Texture 2",
		image: texture2.src,
		type: "texture",
	},
	{
		name: "Texture 3",
		image: texture3.src,
		type: "texture",
	},
	{
		name: "Texture 4",
		image: texture4.src,
		type: "texture",
	},
	{
		name: "Texture 5",
		image: texture5.src,
		type: "texture",
	},
	{
		name: "Front Logo 1",
		image: logo1.src,
		type: "frontLogo",
	},
	{
		name: "Front Logo 2",
		image: logo2.src,
		type: "frontLogo",
	},
	{
		name: "Back Logo 1",
		image: logo1.src,
		type: "backLogo",
	},
	{
		name: "Back Logo 2",
		image: logo2.src,
		type: "backLogo",
	},
];
