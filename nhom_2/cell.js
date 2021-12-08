function Cell(id, color){
    this.cell = document.createElement("td");
    this.cell.id = id;
    this.cell.style.backgroundColor = color;

    this.chesspiece = null;

    this.appendChesspiece = (chesspiece) => {
        this.cell.appendChild(chesspiece.getImage());
        this.chesspiece = chesspiece;
    }

    this.getCell = () => {
        return this.cell;
    }
}