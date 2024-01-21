"use client";

import React, { ChangeEvent } from "react";

import CustomButton from "./CustomButton";
import { DecalTypes } from "../config/constants";

interface FilePickerProps {
	file: File | null;
	setFile: (file: File | null) => void;
	readFile: (type: keyof typeof DecalTypes) => void;
}

// TO:DO - fix type in here

const FilePicker: React.FC<FilePickerProps> = ({ file, setFile, readFile }) => {
	const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
		const file = e.target.files ? e.target.files[0] : null;
		setFile(file);
	};

	return (
		<div className="filepicker-container">
			<div className="flex-1 flex flex-col">
				<input
					id="file-upload"
					type="file"
					accept="image/*"
					onChange={handleFileChange}
				/>
				<label htmlFor="file-upload" className="filepicker-label">
					Upload File
				</label>

				<p className="mt-2 text-gray-500 text-xs truncate">
					{file ? file.name : "No file selected"}
				</p>
			</div>
		</div>
	);
};

export default FilePicker;
