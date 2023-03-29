/*
Title: TIC TAC TOE
Page Title: main.js 
Source code & Original Developer: DCODE - https://github.com/dcode-youtube/tic-tac-toe-vanilla-js/blob/master/index.html
Developer: SoftwareDevGirl
Date: 12/31/2022
*/

import Game from "./game.js";
import GameView from "./GameView.js";

let game = new Game();
let gameView = new GameView(document.getElementById("app"));


//define Functions
gameView.onTileClick = function(i) {
    //gets the tile index that was clicked on
    game.makeMove(i);
    gameView.update(game);
};

gameView.onRestartClick = function(){
    game = new Game();
    gameView.update(game);


};

gameView.update(game);