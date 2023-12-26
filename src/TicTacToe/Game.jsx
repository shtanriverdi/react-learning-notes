import { useState } from "react";
import Board from "./Board";

export default function Game() {
  // History State
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [xIsNext, setXIsNext] = useState(true);
  const [gameDone, setGameDone] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [winnerColors, setWinnerColors] = useState(Array(9).fill("black"));

  const getNextPlayer = () => {
    return xIsNext ? "X" : "O";
  };

  // Game State
  let status;
  const [winner, winnerSquares] = calculateWinner(squares);
  if (winner) {
    status = "Winner is " + winner;
    if (gameDone) {
      setWinnerColors((prevWinnerColors) => {
        const newWinnerColor = [...prevWinnerColors];
        for (const winnerSquare of winnerSquares) {
          newWinnerColor[winnerSquare] = "green";
        }
        return newWinnerColor;
      });
      setGameDone(false);
    }
  } else if (!winner && !squares.some((cell) => cell === null)) {
    status = "Game is a tie";
  } else {
    status = "Next player: " + getNextPlayer();
  }

  const handleClick = (i) => {
    // If the square is already 'X' or 'O' (clicked)
    // or There is a winner either 'X' or 'O'
    // Don't continue
    const winner = calculateWinner(squares)[0];
    if (squares[i] || winner) {
      return;
    }
    // Treating squares array as immutable
    // This will allow you to store every past version of the squares array
    // and navigate between the turns that have already happened.
    const newSquares = squares.slice();
    // Alternative way
    // const newSquares = [ ...squares ];
    newSquares[i] = getNextPlayer();
    setSquares(newSquares);
    setXIsNext(!xIsNext);
  };

  const handleReset = () => {
    setSquares(Array(9).fill(null));
    setGameDone(true);
    setWinnerColors(Array(9).fill("black"));
  };

  return (
    <div className="container">
      <h1>TicTacToe Tutorial</h1>
      <div className="game flex">
        <div className="game-board flex">
          <Board
            squares={squares}
            winnerColors={winnerColors}
            status={status}
            onReset={handleReset}
            onSquareClick={handleClick}
          />
        </div>

        <div className="game-info flex">
          <ol>
            <li>Test TicTacToeTicTacToe</li>
            <li>Test TicTacToe</li>
            <li>Test TicTacToe</li>
            <li>Test TicTacToe</li>
          </ol>
        </div>
      </div>
    </div>
  );
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  // Winner found
  for (const [a, b, c] of lines) {
    if (squares[a] && squares[a] === squares[b] && squares[b] === squares[c]) {
      return [squares[a], [a, b, c]];
    }
  }

  // No winner
  return [null, null];
}
