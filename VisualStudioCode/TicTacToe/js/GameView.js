/*
Title: TIC TAC TOE
Page Title: GameView.js
Source code & Original Developer: DCODE - https://github.com/dcode-youtube/tic-tac-toe-vanilla-js/blob/master/index.html
Developer: SoftwareDevGirl
Date: 12/31/2022
*/

export default class GameView {
    //Constructs a new game view including all of the board tile indexes
    constructor(view) {
        this.view = view;
        this.view.innerHTML =
            `<div class="header">
        <div class="playerTurn"></div> 
        <button type="button" class="boardRestart">
            <i class ="material-icons">refresh</i>
        </button>
    </div>
    <div class="board">
        <div class="boardTile" data-index="0"></div>
        <div class="boardTile" data-index="1"></div>
        <div class="boardTile" data-index="2"></div>
        <div class="boardTile" data-index="3"></div>
        <div class="boardTile" data-index="4"></div>
        <div class="boardTile" data-index="5"></div>
        <div class="boardTile" data-index="6"></div>
        <div class="boardTile" data-index="7"></div>
        <div class="boardTile" data-index="8"></div>
    </div>
    <div class="footer status"></div>
    `;
        //These functions are defined in the main.js script. 
        this.onTileClick = undefined;
        this.onRestartClick = undefined;
        //gets the board tile index that was clicked on
        this.view.querySelectorAll(".boardTile").forEach(tile => {
            tile.addEventListener("click", () => {
                if (this.onTileClick) {
                    this.onTileClick(tile.dataset.index);
                }
            });
        });

        //Event listener to see if the restart button has been pressed
        this.view.querySelector(".boardRestart").addEventListener("click", () => {
            if (this.onRestartClick) {
                this.onRestartClick();
            }
        });
    }
    //updates player turn, status, and the game board
    update(game) {
        this.updateTurn(game);
        this.updateStatus(game);
        this.updateBoard(game);
    }
    //updates the status of the game to either in progress, winner, or it's a tie.
    updateStatus(game) {
        let status = "Game In Progress...";

        if (game.findThreeInARow()) {
            status = `${game.turn} is the Winner!`;

        } else if (!game.isInProgress()) {
            status = "It's a tie!";
        }

        this.view.querySelector(".status").textContent = status;
    }

    updateTurn(game) {
        this.view.querySelector(".playerTurn").textContent = `It's ${game.turn}'s turn`;
    }

    updateBoard(game) {
        //checks to see if there is a winner, or if game is a tie so far. 
        const winningCombos = game.findThreeInARow();
        const winningTiles = null;
     
        //retrieves each tile
        for (let i = 0; i < game.board.length; i++) {
            const tile = this.view.querySelector(`.boardTile[data-index="${i}"]`);
            //removes winner tiles with every update
            tile.classList.remove(".winningTile");
            //retrieves the text content (O or X) from the tile
            tile.innerHTML = game.board[i];
            const tileImage = tile.querySelector(".playerGraphic");
            //Checks if this tile is in a winning combo, and it includes the tile we are looking at
            if (winningCombos && winningCombos.includes(i)) {
                //adds Winning Animation to the board for this player. 
                
                //add class winning Tile to animate only these tiles
                tileImage.classList.add(".winningTile");
            
                //let degrees = 5;//degrees image rotates every time rotateWinningTiles() is called
                //var rotation = 200;
    
                
            }
        }
        const winners = document.getElementsByClassName('.winningTile');
        game.rotateTiles(2);
    }
}

    








