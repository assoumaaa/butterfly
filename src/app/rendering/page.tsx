"use client";

import Canvas from "./canvas";
import Customizer from "./components/Customizer";
import Shirt from "./canvas/Shirt";

function Rendering() {
	return (
		<main className="app transition-all ease-in">
			<Canvas />
			<Customizer />
		</main>
	);
}

export default Rendering;
