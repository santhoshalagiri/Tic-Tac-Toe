import Game from "./game.js"
import GameView from "./GameView.js"

let game = new Game(); /* it goes to game.js, calling the constructor coz the class object gets initialized */
let gameView = new GameView();

document.querySelector(".restart").addEventListener("click", () => {
    onRestartClick();
})

let tiles = document.querySelectorAll(".board-tile");
tiles.forEach((tile) => {
    tile.addEventListener("click", () => {
        onTileClick(tile.dataset.index);
    })
})

function onTileClick(i){
    // do something once we click a tile we need to know the index that was clicked because we need to know where x and o are positioned in the tile.
    game.makeMove(i);
    gameView.updateBoard(game);
}

function onRestartClick() {
    game = new Game();
    gameView.updateBoard(game)
}

gameView.updateBoard(game);
