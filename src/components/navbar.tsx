import Image from "next/image";
import { ModeToggle } from "./mode-toggle";
import { useState } from "react";

export function Navbar() {
	return (
		<div className="container flex h-14 max-w-screen-2xl items-center justify-between">
			<div className="flex items-center">
				<a className="flex items-center justify-center space-x-2" href="/">
					<Image
						src={"/logo.png"}
						width={55}
						height={55}
						alt="butterfly"
						priority
					/>
					<span className="inline-block font-light tracking-wide  text-xl">
						Butterfly
					</span>
				</a>
			</div>
			<nav className="flex items-center justify-center gap-6 text-sm">
				<a
					className="transition-colors hover:text-foreground/80 text-foreground/60"
					href="/products"
				>
					Products
				</a>
			</nav>
			<div className="flex items-center">
				<nav className="flex items-center">
					<ModeToggle />
				</nav>
			</div>
		</div>
	);
}
