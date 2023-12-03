console.log('Running...');
let input1 = document.getElementById('num1-el');
let input2 = document.getElementById('num2-el');

function num1() {
	input1.innerText = prompt('Enter the 1st Number:');
}

function num2() {
	input2.innerText = prompt('Enter the 2nd Number:');
}

function add() {
	let result = Number(input1.innerText) + Number(input2.innerText);
	document.getElementById('res-el').innerText = 'Result : ' + result;
}

function sub() {
	let result = Number(input1.innerText) - Number(input2.innerText);
	document.getElementById('res-el').innerText = 'Result : ' + result;
}

function mul() {
	let result = Number(input1.innerText) * Number(input2.innerText);
	document.getElementById('res-el').innerText = 'Result : ' + result;
}
function div() {
	let result = Number(input1.innerText) / Number(input2.innerText);
	document.getElementById('res-el').innerText = 'Result : ' + result;
}
