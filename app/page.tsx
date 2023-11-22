"use client";
import Image from "next/image";
import { useState } from "react";
import { MultiplicationTable } from "./multiplicationTable";

export default function Home() {
	const [gridSize, setGridSize] = useState(0);
	return (
		<main className="flex min-h-screen flex-col p-12 bg-[#0D743D]">
			<div className="flex flex-col items-center justify-center">
				<div className="text-5xl">Kenzie&apos;s Pizza Party</div>
			</div>
			<div className="flex gap-8">
				<div className="flex flex-col gap-2">
					<div className="border-b-2 border-b-black text-3xl flex"> Number</div>
					{Array.from(Array(13).keys()).map((item) => {
						return (
							<div key={item + 1} className="flex items-center justify-center">
								<button
									onClick={() => setGridSize(item + 1)}
									className="text-3xl flex"
								>
									{item + 1}
								</button>
							</div>
						);
					})}
				</div>
				<MultiplicationTable gridSize={gridSize} />
			</div>
		</main>
	);
}
