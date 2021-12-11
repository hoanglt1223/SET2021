import {COLUMNS, ROWS} from "../variables.js";

export const Square = function (column, row) {
    this.column = column;
    this.row = row;

    // render
    const square = document.createElement('button');
    square.classList.add('c-board__square');
    if ((COLUMNS.indexOf(column) + ROWS.indexOf(row)) % 2 === 0) {
        square.classList.add('c-board__square--black');
    } else {
        square.classList.add('c-board__square--white');
    }
    if (column === 'a') {
        const letter = document.createElement('p');
        letter.innerHTML = row;
        letter.className = 'c-row-letter';
        square.appendChild(letter);
    }
    if (row === 1) {
        const letter = document.createElement('p');
        letter.innerHTML = column;
        letter.className = 'c-column-letter';
        square.appendChild(letter);
    }
    square.id = column + row;

    // add click event listener
    // square.onclick = () => {
    //   if(getSelectedItem()) {
    //     move(square.id);
    //   } else {
    //     select(square.id);
    //   }
    //
    this.element = square;
}