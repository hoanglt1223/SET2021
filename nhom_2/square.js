function Square(x, y, square__Size) {
    this.color = ((x + y) % 2 === 0) ? ColorType.BACKGROUND.WHITE : ColorType.BACKGROUND.BLACK;
    const tile = document.createElement('div');
    this.position_X = x;
    this.position_Y = y;
    this.chessman = null;
    this.isHighLighted = false;
    this.isSuggested = false;
    Object.assign(tile, {
        value: `${x}-${y}`,
        className: "square",
        style: `width: ${square__Size - 8 + "px"}; 
                height: ${square__Size - 8 + "px"};
                margin: 0px;
                background-color: ${this.color};
                border: 4px solid ${this.color};
                display: inline-block`,
    })

    // event
    tile.addEventListener("mouseover", () => {
        if (this.chessman != null) {
            if (!this.isSuggested) {
                tile.style.backgroundColor = ColorType.HOVER;
            }
            tile.style.cursor = "pointer";
        }
    })

    tile.addEventListener("mouseout", () => {
        if (!this.isSuggested)
            tile.style.backgroundColor = this.color;
    })


    // set
    this.setChessman = (chessman) => {
        if (this.chessman != null) {
            this.removeChessman();
        }
        chessman.setPosition(this.position_X, this.position_Y);
        this.chessman = chessman;
        tile.appendChild(chessman.getImage());
    }

    this.removeChessman = () => {
        tile.removeChild(this.chessman.getImage());
        this.chessman = null;
    }

    this.select = (status) => {
        if (status) {
            tile.style.borderColor = ColorType.SELECT;
        }
        else {
            tile.style.borderColor = this.color;
        }
        this.isHighLighted = status;
    }

    this.hightlight = (status, opponent = false, checkmate = false) => {
        if (status) {
            tile.style.backgroundColor = ColorType.POSSIBLE_MOVE;
            if (opponent) {
            tile.style.backgroundColor = ColorType.POSSIBLE_MOVE_OPPONENT;
            }
            tile.style.borderColor = "black";
            this.isSuggested = true;
        }
        else {
            tile.style.backgroundColor = this.color;
            tile.style.borderColor = this.color;
            this.isSuggested = false;
        }
    }


    // get
    this.getChessman = () => {
        return this.chessman;
    }

    this.havingChessman = () => {
        return (this.chessman != null);
    }

    this.getPosition = () => {
        return { x: this.position_X, y: this.position_Y };
    }

    this.getTile = () => {
        return tile;
    }
}