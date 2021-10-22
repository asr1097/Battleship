import { respondToClick, startMain } from "./game.js";

const container = document.querySelector(".container");

const makeBoardsDiv = () => {
    let boardsDiv = document.createElement("div");
    boardsDiv.classList.add("boardsDiv");
    container.appendChild(boardsDiv);
};

const makeBoard = (className) => {
    let boardsDiv = document.querySelector(".boardsDiv");
    let boardDiv = document.createElement("div");
    boardDiv.classList.add("boardDiv");
    boardDiv.classList.add(className);

    for (let i = 1; i <= 100; i++) {
        let div = document.createElement("div");
        div.dataset.index = i;
        div.classList.add(`${className}gridElement${i}`);
        div.classList.add(`${className}gridElement`);
        div.classList.add("gridElement");
        boardDiv.appendChild(div);
    };

    boardsDiv.appendChild(boardDiv);
};

const deleteBoards = () => {
    document.querySelector(".board1").remove()
    document.querySelector(".board2").remove();
}

const makeRestartDiv = () => {
    let div = document.createElement("div");
    div.classList.add("restartDiv");
    let btn = document.createElement("button");
    btn.textContent = "Restart";
    btn.classList.add("restartBtn");
    btn.addEventListener("click", function(){
        hideRestartDiv()
        hideWinnerDiv()
        deleteBoards()
        startMain()
    });

    div.appendChild(btn);
    container.appendChild(div);

}

const showRestartDiv = () => {
    document.querySelector(".restartDiv").style.display = "block";
};

const hideRestartDiv = () => {
    document.querySelector(".restartDiv").style.display = "none";
}

const updateSquare = (squareIndex, hit, boardName) => {
    let square = document.querySelector(`.${boardName}gridElement${squareIndex}`);
    let p = document.createElement("p");
    if(hit) {
        p.textContent = "X",
        square.classList.add("hit");}
    else {
        p.textContent = "•";
        square.classList.add("miss");};
        square.removeEventListener("click", respondToClick);
        square.appendChild(p);
};

const renderShips = (boardName, coords) => {
    for (let i = 0; i < coords.length; i++) {
        for (let j = 0; j < coords[i].length; j++) {
            let square = document.querySelector(`.${boardName}gridElement${coords[i][j]}`)
            square.classList.add("ship");
        }
    }
};

const makeWinnerDiv = () => {
    let div = document.createElement("div");
    div.classList.add("winnerDiv");
    let p = document.createElement("p");
    p.classList.add("winnerP");

    div.appendChild(p);
    container.appendChild(div);
};

const showWinnerDiv = (name) => {
    document.querySelector(".winnerDiv").style.display = "block";
    document.querySelector(".winnerP").textContent = `${name} won!`;
};

const hideWinnerDiv = () => {
    document.querySelector(".winnerP").textContent = "";
    document.querySelector(".winnerDiv").style.display = "none";
}

const makeDOM = () => {
    makeBoardsDiv();
    makeBoard("board1");
    makeBoard("board2");
    makeRestartDiv();
    makeWinnerDiv();
};

export default { 
    makeDOM,
    updateSquare,
    renderShips,
    showRestartDiv,
    showWinnerDiv
};