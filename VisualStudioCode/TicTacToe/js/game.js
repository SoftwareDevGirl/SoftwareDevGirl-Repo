/*
Title: TIC TAC TOE
Page Title: game.js
Source code & Original Developer: DCODE - https://github.com/dcode-youtube/tic-tac-toe-vanilla-js/blob/master/index.html
Developer: WebDevGirl
Date: 12/31/2022
*/

export default class Game {
    //starts a new game starting with player X, Constructs a new board with 9 empty spaces.
    constructor (){
        this.turn = "X";
        this.board = new Array(9).fill(null);
    }

    nextTurn() {
        //If the current turn is X then make it O, otherwise turn = X.
        this.turn = this.turn === "X" ? "O" : "X";
        
    }

    makeMove(i) {
        //If the game is not in progress no moves can be made, return nothing.  
        if(!this.isInProgress()){
            return;
        }
        //If this board at this space is already occupied, return nothing.
        if(this.board[i]){
            
            return;
        }
        //this board at this index is equal to whoevers turn it is and places an X or an O in the index they click on
        if(this.turn == "X"){
            this.board[i] = `<img class ="playerGraphic" src="/img/x-graphic.png" alt="X"/>`;
        }else if(this.turn =="O"){
            this.board[i] = `<img class ="playerGraphic" src="/img/o-graphic.png" alt="O"/>`;
        } 
        
        //after this turn has been taken move to the next players turn.
        if(!this.findThreeInARow()){
            this.nextTurn();
        }
    }

    findThreeInARow() {
        //these are all the winning combinations on the board
        const winningCombos = [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6]
        ];

        //traverse through each of the winning combos and see if there is a match.
         for (const combination of winningCombos ) {
            
            const [a, b, c] = combination;
            //If a is not null, and if a has the same value as b, and a also has the same value as c, then we have a 
            //winning combination. Return the winning combination.
            if(this.board[a] && (this.board[a] === this.board[b] && this.board[a] === this.board[c])){
                console.log("WinningCombo: " + a, b, c);
                return combination;
            }
        
         }
    }

    isInProgress(){
        //checks to see if three in a row has been found, and if the board has any null spaces left to play.
        return !this.findThreeInARow() && this.board.includes(null);
    }

        // Rotate the winning tiles
        rotateTiles(rotationSpeed) {
            // get the three winning tiles
            const [a, b, c] = this.findThreeInARow();
            if (a !== undefined) {
                // add the rotate class to each of the winning tiles
                const tileElements = document.querySelectorAll(`[data-tile="${a}"], [data-tile="${b}"], [data-tile="${c}"]`);
                tileElements.forEach((tileElement) => {
                    tileElement.classList.add('rotate');
                    tileElement.style.setProperty('--rotation-speed', rotationSpeed + 's');
                });
            }
        }
        
}