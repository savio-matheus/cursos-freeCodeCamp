function palindrome(str) {
	str = str.toLowerCase();
	let arr = str.match(/[A-Za-z0-9]/gi);

	//console.log(arr);

	let arrLen = arr.length;
	let firstHalf = arr.slice(0, Math.floor(arrLen / 2));
	let secondHalf = arr.slice(Math.floor(arrLen / 2));

	//console.log(firstHalf);
	//console.log(secondHalf);

	secondHalf = secondHalf.reverse();

	for (let i = 0; i < firstHalf.length; i++) {
		if (firstHalf[i] != secondHalf[i]) {
			return false;
		}
	}
	return true;
}

let output0 = document.getElementById("output-0");
let input0 = document.getElementById("input-0");

input0.addEventListener("input", function (e) {
	let text = "";

	if (input0.value) {
		if (palindrome(input0.value)) {
			text = "É palíndromo";
		} else {
			text = "Não é palíndromo";
		}
	} else {
		text = "...";
	}

	output0.innerText = text;
});

//console.log(palindrome("race car"));