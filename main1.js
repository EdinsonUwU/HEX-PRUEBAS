// Helper function to check if a position is valid on the board
function isValidPosition(row, col, boardSize) {
  return row >= 0 && row < boardSize && col >= 0 && col < boardSize;
}

const machineId = '1';
const randomId = '2';
const boardSize = 5;
const directions = {
  UP: [-1, 0], // Up
  DOWN: [1, 0], // Down
  LEFT: [0, -1], // Left
  RIGHT: [0, 1], // Right
  UPRIGHT: [-1, 1], // Top-right
  DOWNLEFT: [1, -1], // Bottom-left
};
let perceptionMap = {};

function createPerceptionMap(board) {
  for (let i = 0; i < boardSize; i++) {
    for (let j = 0; j < boardSize; j++) {
      perceptionMap[[i, j]] = [];

      for (let dir in directions) {
        let [dr, dc] = directions[dir];
        let newRow = i + dr;
        let newCol = j + dc;

        if (
          isValidPosition(newRow, newCol, boardSize) &&
          board[newRow][newCol] === machineId
        ) {
          perceptionMap[[i, j]].push(dir);
        }
      }
    }
  }
  return perceptionMap;
}

let board = [
  [0, '1', 0, 0, 0,0,0],
  [0, '1', 0, 0, 0,0,0],
  [0, 0, 0, 0, 0,0,0],
  [0, 0, 0, 0, 0,0,0],
  [0, 0, 0, 0, 0,0,0],
  [0, 0, 0, 0, 0,0,0],
  [0, 0, 0, 0, 0,0,0],
];

console.log(createPerceptionMap(board));