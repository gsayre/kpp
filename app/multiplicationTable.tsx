import { useFormState, useFormStatus } from "react-dom";
import { validateMultiplicationTable } from "./actions";

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

export function MultiplicationTable({ gridSize }: { gridSize: number }) {
	const [state, formAction] = useFormState(
		validateMultiplicationTable,
		initialState
	);

	return (
		<>
			<form action={formAction} className="flex flex-col gap-4">
				<div className="flex h-fit">
					{Array.from(Array(gridSize + 1).keys()).map((row, idx) => {
						return (
							<div className="flex flex-col" key={row + "-" + idx}>
								{Array.from(Array(gridSize + 1).keys()).map((col) => {
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
												<div className="flex flex-col border border-black p-4 bg-white w-20 h-16">
													<input
														type="text"
														className="focus:outline-none focus:border-b-black focus:border-b-2 p-1"
														name={col + "-" + row}
													/>
												</div>
											)}
										</div>
									);
								})}
							</div>
						);
					})}
				</div>
				<div className="flex flex-row-reverse">
					{gridSize > 0 && <SubmitButton />}
				</div>
			</form>
		</>
	);
}
