import { getSelectedItem, removeSelectedItem } from "./localStorage.js";
import { getPieceOfSquare } from "./select.js";

export function move (squareId){
    // check xem co selected item k
    const selectedItem = getSelectedItem();
    // if(!selectedItem) {
    //     return;
    // }
    console.log('ahihi')
    //check coi co hop le khong

    // neu co thi append child vao square
    const piece = getPieceOfSquare(selectedItem.square);
    const newSquare = document.getElementById(squareId);
    newSquare.appendChild(piece);



    // delete selected Item
    removeSelectedItem();
}






