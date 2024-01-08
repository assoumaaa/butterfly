"use client";

import * as React from "react";

import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Button } from "@/components/ui/button";
import { Dialog } from "./dialog";
import { DotsVerticalIcon } from "@radix-ui/react-icons";

export function VerticalThreeDots() {
	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button variant={"ghost"} size="icon">
					<DotsVerticalIcon className="h-[1.2rem] w-[1.2rem]" />
					<span className="sr-only">Product options</span>
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent align="end">
				<DropdownMenuItem>Edit</DropdownMenuItem>
				<DropdownMenuItem>Delete</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
