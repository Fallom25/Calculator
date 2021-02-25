if(document.readyState == 'loading'){
	document.addEventListener('DOMContentLoaded', ready);
}else{
	ready();
}

let currentNum = 0;
let newNum = 0;
let symbol = '';

function ready(){
    const clearBtn = document.getElementById('clear__btn');
    clearBtn.addEventListener('click', clearClick);

    const mathBtnList = document.getElementsByClassName('btn__math');
    for(let i = 0; i < mathBtnList.length; i++){
		mathBtnList[i].addEventListener('click', mathClick);
	}

    const numBtnList = document.getElementsByClassName('btn__numbers');
    for(let i = 0; i < numBtnList.length; i++){
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
	if(output.innerHTML === '0'){
		output.innerHTML = `${number}`;
	}
	// else if(output.innerHTML.includes('.')){
	// 	alert("Error too many decimal points");
	// 	clearClick();
	// }
	else{
		output.innerHTML += `${number}`;
	}
}

const mathClick = (event) => {
	output.innerHTML += event.target.innerHTML;

	let groups = output.innerHTML.match(/(?<group1>\-?\d+\.?\d*)(?<group2>[\*\/\+\-])(?<group3>\-?\d+\.?\d*)/).groups;

	let group1 = parseFloat(groups.group1);
	let group3 = parseFloat(groups.group3);
	let group2 = groups.group2;

	if(group2 === '/'){
		result = group1 / group3;
	}else if(group2 === '*'){
		result = group1 * group3;
	}else if(group2 === '-'){
		result = group1 - group3;
	}else if(group2 === '+'){
		result = group1 + group3;	
	}

	output.innerHTML = result += event.target.innerHTML;	
}


const clearClick = () => {
	document.getElementById('output').innerHTML = '0';
	currentNum = 0;
	newNum = 0;
	symbol = '';
	document.getElementById("img1").style.display = "none";
}

const equalsClick = () => {
	let groups = output.innerHTML.match(/(?<group1>\-?\d+\.?\d*)(?<group2>[\*\/\+\-])(?<group3>\-?\d+\.?\d*)/).groups;

	let group1 = parseFloat(groups.group1);
	let group3 = parseFloat(groups.group3);
	let group2 = groups.group2;
		
	if(group2 === '/'){
		result = group1 / group3;
	}else if(group2 === '*'){
		result = group1 * group3;
	}else if(group2 === '-'){
		result = group1 - group3;
	}else if(group2 === '+'){
		result = group1 + group3;	
	}

	output.innerHTML = result
}

const  happyClick = () => {
	document.getElementById("img1").style.display = "block";
	setTimeout(() => {
		document.getElementById("img1").style.display = "none";
	},5000);  
}

// multply deccimal points
// No op after op
// No decimal after op
// No op after decimal
//0 after op
