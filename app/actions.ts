export async function validateMultiplicationTable(
	prevState: any,
	formData: FormData
) {
	try {
		const numArray: Array<Array<Number>> = [];
		const ansArray: Array<Array<Number>> = [];
		const correctnessArray: Array<Array<Boolean>> = [];
		let userCorrect: boolean = true;
		const multiplicationTableEntries = Array.from(formData.entries());
		for (let i = 0; i < Math.sqrt(multiplicationTableEntries.length) + 1; i++) {
			numArray.push([]);
			ansArray.push([]);
			correctnessArray.push([]);
		}
		for (let i = 0; i < Math.sqrt(multiplicationTableEntries.length) + 1; i++) {
			for (
				let j = 0;
				j < Math.sqrt(multiplicationTableEntries.length) + 1;
				j++
			) {
				ansArray[i].push(i * j);
			}
		}
		console.log(ansArray);
		for (const pair of multiplicationTableEntries) {
			const split = pair[0].split("-");
			numArray[Number(split[0])][Number(split[1])] = Number(pair[1]);
		}
		for (let i = 0; i < numArray.length; i++) {
			for (let j = 0; j < numArray[i].length; j++) {
				if (j !== 0) {
					if (numArray[i][j] !== ansArray[i][j]) {
						userCorrect = false;
					}
					correctnessArray[i][j] = numArray[i][j] == ansArray[i][j];
				}
			}
		}
		console.log(userCorrect, correctnessArray);
	} catch (e) {
		return { message: "Failed to check multiplication table" };
	}
}
