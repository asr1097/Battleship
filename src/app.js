const shipsLengths = [4, 3, 3, 2, 2, 2, 1, 1, 1];

const Ship = (len, coordinates) => {

    const shipLength = len;

    const hit = (square) => {
        coordinates[square] = "X";
        return coordinates;
    };

    const isSunk = () => {
       return coordinates.every(sq => sq === "X")
    };


    return {

        length: shipLength,

        coordinates: coordinates,

        hit: hit,

        isSunk: isSunk

    };
};

const Gameboard = (coords) => {

    const shipsCoord = coords;

    let ships = [];

    let missedShots = [];

    const createShips = () => {
        for (let i = 0; i < shipsLengths.length; i++) {
            let ship = Ship(shipsLengths[i], shipsCoord[i]);
            ships.push(ship);
        }
    }

    const receiveAttack = (coord) => {
        for (let i = 0; i < ships.length; i++) {
            if (ships[i].coordinates.includes(coord)) {
                let index = ships[i].coordinates.indexOf(coord);
                ships[i].hit(index);
                if (ships[i].isSunk() && allSunk()) {return "All sunk!"}
                else {return true};
            }
        }
        missedShots.push(coord);
        return false;
    }

    const allSunk = () => {
        return ships.every(ship => ship.isSunk() === true);
    }

    createShips();

    return {
        shipsCoord,

        ships,

        missedShots,

        receiveAttack,

    };
};

const Player = () => {

    let attackedSquare = null;

    const promptForSquares = () => {
        let coords = [];
        let takenSquares = [];
        for(let i = 0; i < shipsLengths.length; i++) {
            let coordStr = prompt(`Enter ship's coordinates (e.g. 34,44): (${shipsLengths[i]}) squares`);
            let coordArr = coordStr.split(",");
            if (!coordArr.every(coord => !takenSquares.includes(coord))) {
                alert("Square(s) is already taken!");
                i--;
                continue;
            } 
            else if(coordArr.length !== shipsLengths[i]) {
               alert("Please enter right number of squares.")
               i--;
               continue;
            }
            else if(coordArr.length > 1) {
                let diff = parseInt(coordArr[1]) - parseInt(coordArr[0]);
                let diffArr = [];
                for (let i = 0; i < coordArr.length-1; i++) {
                    let newDiff = parseInt(coordArr[i+1]) - parseInt(coordArr[i])
                    diffArr.push(newDiff);
                };
                
                if(diffArr.some(diff1 => diff1 !== diff)){
                    alert("Please enter sequential squares!")
                    i--;
                    continue;
                }; 
                let intCord = [];  
                for (let j = 0; j < coordArr.length; j++) {
                    intCord.push(parseInt(coordArr[j]))
                }
                if(intCord.some(cord => cord % 10 === 1
                                        && cord !== intCord[0]))
                {
                    alert("Ship must be placed on 1 row.")
                    i--;
                    continue;
                }
            };
            

            takenSquares = [...takenSquares, ...coordArr];
            let intCord = coordArr.map(coord => parseInt(coord))
            coords.push(intCord)
        };

        return coords;

    };
    

    const attackBoard = (square) => {
        return square;
    };

    let name = prompt("Player name: ");

    return {

        name,

        attackedSquare,

        attackBoard,

        promptForSquares,

    };
};

const Computer = () => {

    let movesAvailable = [];

    let max = 100;

    const getCoordinates = () => {

        let coordinates = [];

        let takenSquares = [];

        let availableSquares = makeMovesArray(max);

        const checkHor = (start, len) => {
            let arr1 = [start];
            let arr2 = [start];

            for (let i = 1; i < len; i++) {
                let val1 = start + i;
                let val2 = start - i;
                arr1.push(val1);
                arr2.push(val2); 
            };

            arr2.sort((a, b) => a - b);

            if (
                (arr1.every(el => !takenSquares.includes(el)
                && el > 0 && el < 101))
                && checkEdges(arr1)
            ) {return arr1}

            else if(
                (arr2.every(el => !takenSquares.includes(el)
                && el > 0 && el < 101))
                && checkEdges(arr2)
            ) {return arr2}

            else {return false}
        };

        const checkVer = (start, len) => {
            let arr1 = [start];
            let arr2 = [start];

            for (let i = 1, j = 10; i < len; i++, j+=10) {
                let val1 = start + j;
                let val2 = start - j;
                arr1.push(val1); 
                arr2.push(val2);
            }
            arr2.sort((a, b) => a - b);
            if (
                arr1.every(el => !takenSquares.includes(el)
                && el > 0 && el < 101)
            ) {return arr1}
            else if (
                arr2.every(el => !takenSquares.includes(el)
                && el > 0 && el < 101)
            ) {return arr2}
            else {return false}

        };

        const checkEdges = (arr) => {
            let first = parseInt(arr[0]/10);
            let last = parseInt(arr[arr.length-1]/10);
            if(first !== last && (last + 10) !== arr[arr.length-1]) {return false}
            return true;
        };

        for (let i = 0; i < shipsLengths.length; i++) {
            let square = availableSquares[Math.floor(Math.random()*availableSquares.length)];
            let arr = [];

            if (i % 2 === 0) {
                arr = checkHor(square, shipsLengths[i]);
                if(!arr) {
                    arr = checkVer(square, shipsLengths[i])
                } 
                else if(!arr) {
                    i--;
                    continue;
                }
            }

            else {
                arr = checkVer(square, shipsLengths[i]);
                if(!arr) {
                    arr = checkHor(square, shipsLengths[i])
                } 
                else if(!arr) {
                    i--;
                    continue;
                }
            };

            takenSquares = [...takenSquares, ...arr];
            coordinates.push(arr);
            arr.forEach(el => {
                let index = availableSquares.indexOf(el);
                availableSquares.splice(index, 1);
            });
        };

        return coordinates;

    };

    const getAdjacentSquares = (lastHit, direction) => {
        // Get adjacent horizontal and verticals squares
        let horMoves = [lastHit-1, lastHit+1];
        let verMoves = [lastHit-10, lastHit+10];

        // If lastHit was 50 for example, remove 51 from horMoves array
        // since it is not in the same row
        if (lastHit % 10 === 0) {horMoves = [lastHit-1]};
        // If lastHit was 51, remove 50 
        if (lastHit % 10 === 1) {horMoves = [lastHit+1]};

        // Remove moves that are unavailable 
        
        if(direction === "horizontal") {
            horMoves = horMoves.filter(mv => movesAvailable.includes(mv) 
            && (mv > 0 && mv < 101));
            return [horMoves, []]}

        else if(direction === "vertical") {
            verMoves = verMoves.filter(mv => movesAvailable.includes(mv)
            && (mv > 0 && mv < 101));
            return [[], verMoves]}

        horMoves = horMoves.filter(mv => movesAvailable.includes(mv) 
        && (mv > 0 && mv < 101));

        verMoves = verMoves.filter(mv => movesAvailable.includes(mv)
        && (mv > 0 && mv < 101));
        let potentialMoves = [horMoves, verMoves];

        return potentialMoves;
    };

    const getAdjacentSquare = (lastHit, direction) => {
        let adjSquare;
        let movesArray = getAdjacentSquares(lastHit, direction);
        if (movesArray[0][1]) {adjSquare = [movesArray[0][1], "horizontal"]}
        else if (movesArray[0][0]) {adjSquare = [movesArray[0][0], "horizontal"]}
        else if (movesArray[1][1]) {adjSquare = [movesArray[1][1], "vertical"]}
        else if (movesArray[1][0]) {adjSquare = [movesArray[1][0], "vertical"]}
        else {
            return false;
        };

        return adjSquare;
    };
    
    const makeMovesArray = (limit) => {
        let array = [];
        for (let i = 1; i <= limit; i++) {
            array.push(i)
        }
        return array;
    };

    const getRandomInt = (limit) => {
        return Math.floor(Math.random() * limit);
    };

    const removeAvailableMove = (square) => {
        let index = movesAvailable.indexOf(square);
        movesAvailable.splice(index, 1);
    };

    const makeCompMove = () => {
        let square = movesAvailable[getRandomInt(movesAvailable.length)];
        return [square, false];
    };

    movesAvailable = makeMovesArray(max);

    return {

        computer: true,

        name: "Computer",

        movesAvailable,

        makeCompMove,

        getCoordinates,

        getAdjacentSquare,

        removeAvailableMove,
    };
};

export { 
    Ship,
    Gameboard,
    Player,
    Computer,
}