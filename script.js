//SET IMPORTANT CONSTANTS + VARIABLES
let color = 'black';
let click = true;
//CREATE DEFAULT 16x16 GRID

function createGrid(size) {
	let grid = document.querySelector('.grid');
	let cells = grid.querySelectorAll('div');
	cells.forEach((div) => div.remove());
	grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
	grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;

	for (let i = 0; i < size * size; i++) {
		let cell = document.createElement('div');
		cell.addEventListener('mouseover', colorSquare);
		cell.classList.add('default-color');
		grid.appendChild(cell);
	}
}

createGrid(16);

/* CHANGE TO SLIDER FOR SIZE*/

const sliderSize = document.querySelector('#rangeValue');
function changeSize(input) {
	createGrid(input);
}

//CHANGE COLOR ON HOVER//

function colorSquare() {
	if (click) {
		if (color === 'rainbow') {
			const rainbowColors = [
				'#f7f0a8',
				'#d5f7c4',
				'#f6d1d9',
				'#fff3f0',
				'#c4d8f3',
				'#c8c7f7',
				'#ccb5fb',
				'#c0e9ef',
			];
			this.style.backgroundColor =
				rainbowColors[Math.floor(Math.random() * rainbowColors.length)];
		} else {
			this.style.backgroundColor = color;
		}
	}
}

function changeColor(choice) {
	color = choice;
}

//RESET GRID//
function resetGrid() {
	let grid = document.querySelector('.grid');
	let cells = grid.querySelectorAll('div');
	cells.forEach((div) => (div.style.backgroundColor = 'white'));
}

document.querySelector('body').addEventListener('click', () => {
	click = !click;
});
