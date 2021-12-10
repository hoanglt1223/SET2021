function Cell(letter , row, color){
    // property
    this.cell = document.createElement("td");
    this.chesspiece = null;
    this.position_X = letter;
    this.position_Y = row;
    
    // handler Event
    this.cell.addEventListener("mouseover", () => {
        if (this.chesspiece !== null){
            this.cell.style.backgroundColor = "#716a5c";
        }
    })

    this.cell.addEventListener("mouseout", () => {
        this.cell.style.backgroundColor = color;
    })


    // set
    this.cell.id = letter + row;
    this.cell.style.backgroundColor = color;

    this.setChesspiece = (chesspiece) => {
        this.cell.appendChild(chesspiece.getImage());
        chesspiece.setPosition(letter, row)
        this.chesspiece = chesspiece;
    }

    
    // get
    this.getCell = () => {
        return this.cell;
    }
}