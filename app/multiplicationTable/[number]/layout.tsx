"use client";
import Link from "next/link";
import Page from "@/app/multiplicationTable/[number]/page";
import { useEffect, useState } from "react";

function useFinishedArray() {
	const initialState = () => {
		if (typeof window !== "undefined") {
			return window.localStorage.getItem("finishedArray");
		}
		return Array.from(Array(13).keys()).map(function (el) {
			return {
				num: el,
				isFinished: false,
			};
		});
	};

	const [finishedArray, setFinishedArray] = useState(initialState);

	const updateFAAtIndex = (idx: number) => {
		let tempArr = [...finishedArray];
		let item = tempArr[idx];
		item.isFinished = true;
		tempArr[idx] = item;
		setFinishedArray([...tempArr]);
	};

	useEffect(
		() =>
			window.localStorage.setItem(
				"finishedArray",
				JSON.stringify(finishedArray)
			),
		[finishedArray]
	);

	return { finishedArray, updateFAAtIndex };
}

export default function Layout({ children }: { children: React.ReactNode }) {
	const { finishedArray, updateFAAtIndex } = useFinishedArray();

	return (
		<section className="flex">
			<div className="flex gap-8">
				<div className="flex flex-col gap-2">
					<div className="border-b-2 border-b-black text-3xl flex"> Number</div>
					{Array.from(Array(13).keys()).map((item) => {
						return (
							<div key={item + 1} className="flex items-center justify-center">
								<Link
									href={`/multiplicationTable/${item + 1}`}
									className="text-3xl flex"
								>
									{item + 1}
								</Link>
							</div>
						);
					})}
				</div>
			</div>
			<main>
				<Page updateFinishedArray={updateFAAtIndex} />
			</main>
		</section>
	);
}
