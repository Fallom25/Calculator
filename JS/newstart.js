if (document.readyState == 'loading') {
	document.addEventListener('DOMContentLoaded', ready);
} else {
	ready();
}

const regex = /(?<group1>\-?\d+\.?\d*)(?<group2>[\*\/\+\-])(?<group3>\-?\d+\.?\d*)/;

function ready() {
	const clearBtn = document.getElementById('clear__btn');
	clearBtn.addEventListener('click', clearClick);

	const mathBtnList = document.getElementsByClassName('btn__math');
	for (let i = 0; i < mathBtnList.length; i++) {
		mathBtnList[i].addEventListener('click', mathClick);
	}

	const numBtnList = document.getElementsByClassName('btn__numbers');
	for (let i = 0; i < numBtnList.length; i++) {
		numBtnList[i].addEventListener('click', numberClick);
	}

	const equalsBtn = document.getElementById('equals__btn');
	equalsBtn.addEventListener('click', equalsClick);

	const happyBtn = document.getElementById('bonus__btn');
	happyBtn.addEventListener('click', happyClick);
}


const numberClick = (event) => {
	let output = document.getElementById('output');
	let number = event.target.value;

	if (output.innerHTML === '0') {
		output.innerHTML = `${number}`;
	}
	else {
		output.innerHTML += `${number}`;
	}
}

const mathClick = (event) => {
	output.innerHTML = equationCheck(output.innerHTML);
	if (output.innerHTML !== '0') {
		output.innerHTML += event.target.innerHTML;
	}
}

const clearClick = () => {
	output.innerHTML = '0';
}

const equalsClick = () => {
	output.innerHTML = equationCheck(output.innerHTML);
}

const happyClick = () => {
	document.getElementById("img1").style.display = "block";
	setTimeout(() => {
		document.getElementById("img1").style.display = "none";
	}, 5000);
}

const equationCheck = (expression) => {

	if (['+', '-', '*', '/'].includes(expression[expression.length - 1])) {
		alert("Please do not use multiple operators in a row");
		return '0';
	}

	if ((expression.match(/\./g) || []).length > 2) {
		alert("Error too many decimal points");
		return '0';
	}

	if (expression[expression.length - 1].includes('.')) {
		expression += '00';
	}

	if (expression.match(regex) === null) {
		return expression;
	}
	return calculate(expression);
}

const calculate = (expression) => {

	let groups = expression.match(regex).groups;
	let group1 = parseFloat(groups.group1);
	let group3 = parseFloat(groups.group3);
	let group2 = groups.group2;

	if (group2 === '/') {
		return (group1 / group3).toFixed(2);
	} else if (group2 === '*') {
		return (group1 * group3).toFixed(2);
	} else if (group2 === '-') {
		return (group1 - group3).toFixed(2);
	} else {
		return (group1 + group3).toFixed(2);
	}
}





// multply deccimal points
