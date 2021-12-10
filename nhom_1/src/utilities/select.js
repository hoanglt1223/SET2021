import { setSelectedItem } from "./localStorage.js";

export function select(squareId){
    let piece = getPieceOfSquare(squareId);
    if(!piece){ 
        return;
    }

    // save square into local storage
    // save piece into local storage
    const selectedItem = {
        square: squareId,
        piece: piece.classList[0]
    }
    setSelectedItem(selectedItem);
    



    //change color of square


    // recommend

}


export function getPieceOfSquare(squareId){
    const squareElement = document.getElementById(squareId);
    if(!squareElement){
        return null;
    }
    const pieces = squareElement.getElementsByClassName('piece');
    if(pieces.length === 0){
        return null;
    }
    return pieces[0];
}

