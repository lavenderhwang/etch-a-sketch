//SET IMPORTANT CONSTANTS + VARIABLES

const grid = document.querySelector('.grid');

//CREATE DEFAULT 16x16 GRID

function defaultGrid() {
	for (let i = 0; i < 16 * 16; i++) {
		const gridCell = document.createElement('div');
		gridCell.classList.add('grid-cell');
		grid.appendChild(gridCell);
	}

	gridCell.addEventListener('mouseover', (e) =>
		e.target.classList.add('change-color')
	);
}

defaultGrid();

//CHANGE COLOR ON HOVER//

// LOAD THE PAGE //
