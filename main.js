/**
 * Funcion getCellsInShortestsPaths
 * board,playerId
 * board = matriz de matriz 7X7
 * playerId = '1' o '2'
 * retorna un array que tiene los hex de ese board que pertenenecen a los
 * caminos mas cortos
 * La funcion getCellsInShortestsPaths usa el algoritmo bfs para hallar
 * desde la columna:
 * izquierda si es playerId es 2
 * hasta la columna derecha
 * Tambien si el playerId es '1' evalua desde la fila:
 * superior hasta la fila inferior.
 * Para hallar las celdas que tienen los caminos mas cortos desde la fila o columna
 * inicial, hasta la fila o columna terminal.
 *
 * Tengase en cuenta que para hallar ese camino, se debe llamar al bfs desde la fila o columna
 * inicial.
 * Tengase en cuenta que cada camino termina cuando llega a la fila o columna final.
 * Tengase en cuenta que nunca un camino va a tener un costo mayor que el numero boardSize(7)
 * Tengase en cuenta que un camino puede tener un numero de hexes mayor al boardSize,
 * debido a que si uno o mas hexes en ese camino estan en el camino mas corto, no hay que volverlos
 * a contar como costo.
 */

/**
 * Funcion getNumberOfNecessaryMovesToWin
 * board,playerId
 * Da como resultado el numero de hexes que tiene que poner un aliado para llegar de la fila o columna
 * inicial a la fila o columna final. Este numero es el mas optimo, debido a que usa la funcion
 * getCellsInShortestsPaths.
 */

/**
 * Funcion getBoardScore
 * board, playerId
 * Apartir de un tablero board de 7X7, halla el score para una playerId '1' o '2'
 * Con la formula:
 * MovimientosDelOponenteParaGanar - MovimientosAliadosParaGanar.
 * Ambos resultados se obtienen a partir de la funcion getNumberOfNecessaryMovesToWin
 */

const playerTwo = "2";
const playerOne = "1";
const boardSize = 7;
const directions = {
	UP: [-1, 0], // Up
	DOWN: [1, 0], // Down
	LEFT: [0, -1], // Left
	RIGHT: [0, 1], // Right
	UPRIGHT: [-1, 1], // Top-right
	DOWNLEFT: [1, -1], // Bottom-left
};

let board = [
	[0, "2", 0, 0, 0, 0, 0],
	[0, "2", 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0],
];

function isValidPosition(row, col, boardSize) {
	return row >= 0 && row < boardSize && col >= 0 && col < boardSize;
}

function evaluateBoard(board, playerId) {}

function bfs() {
	var queue;
}
