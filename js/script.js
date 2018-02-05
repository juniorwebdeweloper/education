var cont = document.getElementById('cPcont');
var span = document.getElementById('burger').getElementsByTagName('span');
var btn = document.getElementById('burger');
var changeF = document.getElementById('ch1');
var changeC = document.getElementById('ch2');
var delP = document.getElementById('del').onclick = (() => deleteParagraph());
var changeFF = document.getElementById('ch3');
var inputFont = document.querySelector('.font-change').oninput = function() {changeFont();};
var inputColor = document.querySelector('.color-input').oninput = function() {changeColor();};
var radioFont = document.querySelectorAll('.r_button');
		for (var i = 0; i < radioFont.length; i++) {
			radioFont[i].onchange = () => changeFontFamily(); 
		};

		btn.onclick = function() {
		slideMenu();
		};


function slideMenu() {
	cont.classList.toggle('active');
	for (var i = 0; i < span.length; i++) {
		span[i].classList.toggle('active-btn');
	}
}

function changeFont(e) {
	var currentValue = event.target.value;
	changeF.onclick = function() {
		if (currentValue >= 8 && currentValue <= 24 &&  Number.isInteger(parseFloat(currentValue))) {
			var changeParagraph = document.querySelectorAll('.content p');
			for (var i = 0; i < changeParagraph.length; i++) {
					changeParagraph[i].style.fontSize = currentValue + 'px';
				}
		} else {
			alert('Please write integer number from 8px to 24px!');
		}
	}
}

function changeColor(e) {
	var currentValue = event.target.value;
	changeC.onclick = function () {
		var changeBgColor = document.querySelector('body');
		changeBgColor.style.backgroundImage = 'none';
		changeBgColor.style.backgroundColor = currentValue;
	}
}

function deleteParagraph() { 
	let pElements = document.getElementsByTagName('p');
	pElements[pElements.length -1].remove();
}

function changeFontFamily(e) {
	var currentValue = event.target;
	changeFF.onclick = function() {
		for (var i = 0; i < radioFont.length; i++) {
			if (currentValue === radioFont[i]) {
					document.body.style.fontFamily = FONTS[i];
					console.log(document.body.style.fontFamily);
			}
		}
	}
}

const FONTS = ['Roboto', 'Nautilus Pompilius', 'Beer money'];