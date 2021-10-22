import { 
    Ship,
    Gameboard,
    Player,
    Computer, } from "./app";

test("creates ship correctly", () => {
    let ship = Ship(4, [1,2,3,4]);
    ship = JSON.stringify(ship)
    expect(ship).toEqual('{"length":4,"coordinates":[1,2,3,4]}')
});

test("test hit function 0", () => {
    let ship = Ship(4, [1,2,3,4]);
    expect(ship.hit(0)).toEqual(["X", 2, 3, 4])
});

test("test hit function 3", () => {
    let ship = Ship(4, [1,2,3,4]);
    expect(ship.hit(3)).toEqual([1, 2, 3, "X"])
});

test("test isSunk function 1", () => {
    let ship = Ship(2, [1,2]);
    ship.hit(0);
    ship.hit(1);
    expect(ship.isSunk()).toBe(true);
});

test("test isSunk function 2", () => {
    let ship = Ship(3, [1,2,3]);
    expect(ship.isSunk()).toBe(false);
});

test("test isSunk function 3", () => {
    let ship = Ship(3, [4,14,24]);
    ship.hit(0);
    ship.hit(2);
    expect(ship.isSunk()).toBe(false);
});

test("creates gameboard correctly", () => {
    let board = Gameboard([[2],[98],[27,37],[5,6]]);
    board = JSON.stringify(board);
    expect(board).toEqual(`{"ships":[{"length":1,"coordinates":[2]},{"length":1,"coordinates":[98]},{"length":2,"coordinates":[27,37]},{"length":2,"coordinates":[5,6]}],"missedShots":[]}`)
});

test("test receiveAttack hit 1", () => {
    let board = Gameboard([[1],[2],[3,4],[5,6]]);
    board.receiveAttack(3);
    expect(board.ships[2].coordinates).toEqual(["X", 4]);
});

test("test receiveAttack hit 2", () => {
    let board = Gameboard([[1],[2],[3,4],[5,6]]);
    board.receiveAttack(4);
    expect(board.ships[2].coordinates).toEqual([3, "X"]);
});

test("test receiveAttack miss 1", () => {
    let board = Gameboard([[1],[2],[3,4],[6,7]]);
    board.receiveAttack(5);
    expect(board.missedShots).toEqual([5]);
});


test("test receiveAttack miss 2", () => {
    let board = Gameboard([[1],[2],[3,4],[6,7]]);
    board.receiveAttack(5);
    board.receiveAttack(67);
    expect(board.missedShots).toEqual([5, 67]);
});

test("test allSunk true", () => {
    let board = Gameboard([[1],[2],[3,4],[5,6]]);
    board.receiveAttack(1);
    board.receiveAttack(2);
    board.receiveAttack(3);
    board.receiveAttack(5);
    board.receiveAttack(6);
    expect(board.receiveAttack(4)).toEqual("All sunk!");
});

test("test allSunk false 1", () => {
    let board = Gameboard([[1],[2],[3,4],[5,6]]);
    board.receiveAttack(1);
    board.receiveAttack(2)
    expect(board.receiveAttack(4)).toEqual(true);
});

test("test allSunk false 2", () => {
    let board = Gameboard([[1],[2],[3,4],[6,7]]);
    board.receiveAttack(1);
    board.receiveAttack(2)
    expect(board.receiveAttack(5)).toEqual(false);
});


test("comp random move 1", () => {
    let comp = Computer();
    let square = comp.makeCompMove();
    expect(comp.movesAvailable.includes(square)).toBe(false);
});

test ("comp random move 2", () => {
    let comp = Computer();
    let square = comp.makeCompMove();
    let square1 = comp.makeCompMove();
    expect(comp.movesAvailable.includes(square) && comp.movesAvailable.includes(square1))
    .toBe(false);
});
