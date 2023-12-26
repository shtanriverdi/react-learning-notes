import { useState } from "react";
import Square from "./Square";

export default function Board() {
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
    setWinnerColors(Array(9).fill('black'));
  };

  return (
    <>
      <h1>{status}</h1>
      <div className="board-row">
        <Square
          color={winnerColors[0]}
          value={squares[0]}
          onSquareClick={() => handleClick(0)}
        />
        <Square
          color={winnerColors[1]}
          value={squares[1]}
          onSquareClick={() => handleClick(1)}
        />
        <Square
          color={winnerColors[2]}
          value={squares[2]}
          onSquareClick={() => handleClick(2)}
        />
      </div>
      <div className="board-row">
        <Square
          color={winnerColors[3]}
          value={squares[3]}
          onSquareClick={() => handleClick(3)}
        />
        <Square
          color={winnerColors[4]}
          value={squares[4]}
          onSquareClick={() => handleClick(4)}
        />
        <Square
          color={winnerColors[5]}
          value={squares[5]}
          onSquareClick={() => handleClick(5)}
        />
      </div>
      <div className="board-row">
        <Square
          color={winnerColors[6]}
          value={squares[6]}
          onSquareClick={() => handleClick(6)}
        />
        <Square
          color={winnerColors[7]}
          value={squares[7]}
          onSquareClick={() => handleClick(7)}
        />
        <Square
          color={winnerColors[8]}
          value={squares[8]}
          onSquareClick={() => handleClick(8)}
        />
      </div>
      <button className="btn" onClick={handleReset}>Reset Game</button>
    </>
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
