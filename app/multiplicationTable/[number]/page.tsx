"use client";
import { useFormState, useFormStatus } from "react-dom";
import { validateMultiplicationTable } from "./actions";
import { useParams } from "next/navigation";
import { Dispatch, SetStateAction, useEffect } from "react";

const initialState = {
	message: null,
};

function SubmitButton() {
	const { pending } = useFormStatus();

	return (
		<button
			type="submit"
			aria-disabled={pending}
			className="text-xl rounded-md bg-white p-2 w-20"
		>
			Submit
		</button>
	);
}

interface Props {
	updateFinishedArray: (idx: number) => void;
}

export default function Page(props: Props) {
	const params = useParams();
	const [state, formAction] = useFormState(
		validateMultiplicationTable,
		initialState
    );
    useEffect(() => {
        if (state.userCorrect) {
           props.updateFinishedArray(Number(params.number) - 1)
        }
     }
    ,[state])
	return (
		<form action={formAction} className="flex flex-col gap-4">
			<div className="flex h-fit">
				{Array.from(Array(Number(params.number) + 1).keys()).map((row, idx) => {
					return (
						<div className="flex flex-col" key={row + "-" + idx}>
							{Array.from(Array(Number(params.number) + 1).keys()).map(
								(col) => {
									return (
										<div key={row + "-" + col}>
											{row === 0 && col !== 0 ? (
												<div className="w-20 h-16 flex justify-center items-center text-2xl font-semibold text-white">
													{col}
												</div>
											) : col === 0 && row !== 0 ? (
												<div className="w-20 h-16 flex justify-center items-center text-2xl font-semibold text-white">
													{row}
												</div>
											) : col === 0 && row === 0 ? (
												<div className="w-20 h-16"></div>
											) : (
												<div
													className={`flex flex-col border border-black p-4 w-20 h-16 ${
														state.correctnessArray &&
														state.correctnessArray[col][row]
															? "bg-green-500"
															: state.correctnessArray &&
															  !state.correctnessArray[col][row]
															? "bg-red-500"
															: "bg-white"
													}`}
												>
													<input
														type="text"
														className={`focus:outline-none focus:border-b-black focus:border-b-2 p-1 bg-inherit text-xl text-center ${
															state.correctnessArray &&
															state.correctnessArray[col][row]
																? "bg-green-500"
																: state.correctnessArray &&
																  !state.correctnessArray[col][row]
																? "bg-red-500"
																: "bg-white"
														}`}
														name={col + "-" + row}
													/>
												</div>
											)}
										</div>
									);
								}
							)}
						</div>
					);
				})}
			</div>
			<div className="flex flex-row-reverse">
				{Number(params.number) > 0 && <SubmitButton />}
			</div>
		</form>
	);
}
