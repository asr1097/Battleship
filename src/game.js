import {
    Gameboard,
    Player,
    Computer,
} from "./app.js";

import dom from "./dom.js";

import "./style.css";

let loop;

let player1;
let player2;

let attackingPlayer;
let defendingPlayer;


// Updates Player's attacked square on click
const respondToClick = (ev) => {
    let input = ev.target.dataset.index;
    input = parseInt(input);
    player1.attackedSquare = input;
    return;
};

const changePlayers = () => {
    let temp = attackingPlayer;
    attackingPlayer = defendingPlayer;
    defendingPlayer = temp;
};

const resetPlayers = () => {
    player1 = undefined;
    player2 = undefined;
    attackingPlayer = undefined;
    defendingPlayer = undefined;
}

const main = () => {

    // Set up the game
    if(!player1 && !player2) {
        player1 = Player();
        player2 = Computer();

        let board1 = Gameboard(player1.promptForSquares());
        let board2 = Gameboard(player2.getCoordinates());

        board1.name = "board1";
        board2.name = "board2";

        player1.board = board1;
        player2.board = board2;

        attackingPlayer = player1;
        defendingPlayer = player2;

        dom.makeDOM();
        dom.renderShips("board1", board1.shipsCoord)

        document.querySelectorAll(".board2gridElement").forEach(el => el.addEventListener("click",
            respondToClick)); 
    };

    // Wait for player to make a move
    if (attackingPlayer.attackedSquare !== null && !attackingPlayer.computer) {
        let square = attackingPlayer.attackBoard(attackingPlayer.attackedSquare);
        let hit = defendingPlayer.board.receiveAttack(square);
        dom.updateSquare(square, hit, defendingPlayer.board.name);
        // Reset "attackedSquare" property
        attackingPlayer.attackedSquare = null;
        if (hit === "All sunk!") {
            clearInterval(loop);
            setTimeout(function(){
                dom.showWinnerDiv(attackingPlayer.name);
                resetPlayers()
                dom.showRestartDiv()}, 0);
            ;
        }
        else if (hit) {return}
        else {
            let temp = attackingPlayer;
            attackingPlayer = defendingPlayer;
            defendingPlayer = temp;
        }
    } else if (attackingPlayer.computer) {
        let square;
        // If computer got a hit last move, try adjacent squares
        if (attackingPlayer.lastHit) {
            square = attackingPlayer.getAdjacentSquare(attackingPlayer.lastHit, attackingPlayer.direction);
            // If there are no adjacent squares left, make a random move.
            if(!square){square = attackingPlayer.makeCompMove()};
        } else {square = attackingPlayer.makeCompMove()};

        attackingPlayer.removeAvailableMove(square[0]);

        let hit = defendingPlayer.board.receiveAttack(square[0]);
        
        dom.updateSquare(square[0], hit, defendingPlayer.board.name);

        if (hit === "All sunk!") {
            clearInterval(loop);
            setTimeout(function(){
                dom.showWinnerDiv(attackingPlayer.name);
                resetPlayers()
                dom.showRestartDiv()}, 0)
            ;
        }

        else if (hit) {

            // Update last hit and direction
            attackingPlayer.lastHit = square[0];
            attackingPlayer.direction = square[1];

            // Set Computer properties for first hit
            if(!attackingPlayer.firstHit || !square[1]){
                attackingPlayer.lastHit = square[0];
                attackingPlayer.firstHit = square[0];
                attackingPlayer.direction = square[1];
                return;
            }

            // If reached end of the row, try other direction
            else if(attackingPlayer.direction === "horizontal" 
                && square[0] % 10 === 0){
                attackingPlayer.lastHit = attackingPlayer.firstHit
                return;
            }

            // If reached end of the column, try other direction
            else if(attackingPlayer.direction === "vertical"
                && (square[0] + 10 > 100)) {
                    attackingPlayer.lastHit = attackingPlayer.firstHit
                }
            return;
        }
        else {
            // If random moved missed, reset Computer properties
            if(!square[1]) {

                attackingPlayer.firstHit = false;
                attackingPlayer.lastHit = false;
                attackingPlayer.direction = false;
            }

            // If Computer missed, try the other end of the row/columns
            else if(attackingPlayer.direction) {
                attackingPlayer.lastHit = attackingPlayer.firstHit;
            }

            changePlayers();
            return;
        };
    };
};

const startMain = () => {
    loop = setInterval(main, 600);
};

startMain();

export {
    respondToClick, 
    startMain
};
