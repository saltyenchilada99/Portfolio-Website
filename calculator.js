
const display = document.getElementById('number');
const zero = document.getElementById("0");
const one = document.getElementById('1');
const two = document.getElementById("2");
const three = document.getElementById("3");
const four = document.getElementById("4");
const five = document.getElementById("5");
const six = document.getElementById("6");
const seven = document.getElementById("7");
const eight = document.getElementById("8");
const nine = document.getElementById("9");
const plus = document.getElementById("+");
const minus = document.getElementById("-");
const mult = document.getElementById("*");
const div = document.getElementById("/");
const equals = document.getElementById("=");

let op1 = 0;
let op2 = 0;
let op1Arr = [];
let operator;
let displayPos = parseInt(getComputedStyle(display).left, 10);
let clicks = 0;
let ex = 0;
let exdec = 0;

one.onclick = oneClicked;
two.onclick = twoClicked;
three.onclick = threeClicked;
four.onclick = fourClicked;
five.onclick = fiveClicked;
six.onclick = sixClicked;
seven.onclick = sevenClicked;
eight.onclick = eightClicked;
nine.onclick = nineClicked;
zero.onclick = zeroClicked;
plus.onclick = plusClicked;
minus.onclick = minusClicked;
mult.onclick = multClicked;
div.onclick = divClicked;
equals.onclick = equalsClicked;
function oneClicked() {
	if (clicks < 9) {
		if (op1Arr.length === 0 || display.innerText === "+") {
			display.innerText = 1;
		} else {
			display.innerText += 1;
		}

		clicks++;
		op1Arr.push(1);

	}
}
function twoClicked() {
	if (clicks < 9) {
		if (op1Arr.length === 0) {
			display.innerText = 2;
		} else {
			display.innerText += 2;
		}

		clicks++;
		op1Arr.push(2);
	}
}
function threeClicked() {
	if (clicks < 9) {
		if (op1Arr.length === 0) {
			display.innerText = 3;
		} else {
			display.innerText += 3;
		}

		clicks++;
		op1Arr.push(3);
	}
}
function fourClicked() {
	if (clicks < 9) {
		if (op1Arr.length === 0 || display.innerText === "+") {
			display.innerText = 4;
		} else {
			display.innerText += 4;
		}

		clicks++;
		op1Arr.push(4);
	}
}
function fiveClicked() {
	if (clicks < 9) {
		if (op1Arr.length === 0 || display.innerText === "+") {
			display.innerText = 5;
		} else {
			display.innerText += 5;
		}

		clicks++;
		op1Arr.push(5);
	}
}
function sixClicked() {
	if (clicks < 9) {
		if (op1Arr.length === 0 || display.innerText === "+") {
			display.innerText = 6;
		} else {
			display.innerText += 6;
		}

		clicks++;
		op1Arr.push(6);
	}
}
function sevenClicked() {
	if (clicks < 9) {
		if (op1Arr.length === 0 || display.innerText === "+") {
			display.innerText = 7;
		} else {
			display.innerText += 7;
		}

		clicks++;
		op1Arr.push(7);
	}
}
function eightClicked() {
	if (clicks < 9) {
		if (op1Arr.length === 0 || display.innerText === "+") {
			display.innerText = 8;
		} else {
			display.innerText += 8;
		}

		clicks++;
		op1Arr.push(8);
	}
}
function nineClicked() {
	if (clicks < 9) {
		if (op1Arr.length === 0 || display.innerText === "+") {
			display.innerText = 9;
		} else {
			display.innerText += 9;
		}

		clicks++;
		op1Arr.push(9);
	}
}
function zeroClicked() {
	if (clicks < 9) {
		if (op1Arr[0] !== 0) {
			display.innerText += 0;
			op1Arr.push(0);
		}
		clicks++;
	}

}
function plusClicked() {
	operator = "+"
	for (let i = 0; i < op1Arr.length; i++) {
		op1 += op1Arr[(op1Arr.length - 1) - i] * Math.pow(10, i);
	}
	display.innerText = "+";
	while(op1Arr.length > 0){
		op1Arr.pop();
	}
	clicks = 0;

}
function minusClicked() {
	operator = "-"
	for (let i = 0; i < op1Arr.length; i++) {
		op1 += op1Arr[(op1Arr.length - 1) - i] * Math.pow(10, i);
	}
	display.innerText = "-";
	while(op1Arr.length > 0){
		op1Arr.pop();
	}
	clicks = 0;
}

function multClicked() {
	operator = "*"
	for (let i = 0; i < op1Arr.length; i++) {
		op1 += op1Arr[(op1Arr.length - 1) - i] * Math.pow(10, i);
	}
	display.innerText = "*";
	while(op1Arr.length > 0){
		op1Arr.pop();
	}
	clicks = 0;
}

function divClicked() {
	operator = "/"
	for (let i = 0; i < op1Arr.length; i++) {
		op1 += op1Arr[(op1Arr.length - 1) - i] * Math.pow(10, i);
	}
	display.innerText = "/";
	while(op1Arr.length > 0){
		op1Arr.pop();
	}
	clicks = 0;
}

function equalsClicked() {
	let result = 0;
	for (let i = 0; i < op1Arr.length; i++) {
		op2 += op1Arr[(op1Arr.length - 1) - i] * Math.pow(10, i);
	}
	if (operator === "+") {
		result = op1 + op2;
	}
	if(operator === "-"){
		result = op1 - op2;
	}
	if(operator === "*"){
		result = op1 * op2;
	}
	if(operator === "/"){
		result = op1 / op2;
	}

	while(op1Arr.length > 0){
		op1Arr.pop();
	}

	if(Math.abs(result) < Math.pow(10,9)){
		display.innerText = result;
	} else {
		while(result >= 10) {
			result /= 10;
			ex++;
		}
		display.innerText = result.toFixed(3) + "e" + ex;
		ex = 0;
	}
	clicks = 0;
}
