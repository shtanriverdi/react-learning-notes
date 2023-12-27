import { useState } from "react";
import Board from "./Board";
import { calculateWinner } from "./Utils";

export default function Game() {
  // History State
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  const [gameDone, setGameDone] = useState(true);
  const [winnerColors, setWinnerColors] = useState(Array(9).fill("black"));

  const getNextPlayer = () => {
    return xIsNext ? "X" : "O";
  };

  // Game State
  let status;
  const [winner, winnerSquares] = calculateWinner(currentSquares);
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
  } else if (!winner && !currentSquares.some((cell) => cell === null)) {
    status = "Game is a tie";
  } else {
    status = "Next player: " + getNextPlayer();
  }

  const handleClick = (i) => {
    // If the square is already 'X' or 'O' (clicked)
    // or There is a winner either 'X' or 'O'
    // Don't continue
    const winner = calculateWinner(currentSquares)[0];
    if (currentSquares[i] || winner) {
      return;
    }
    // Treating squares array as immutable
    // This will allow you to store every past version of the squares array
    // and navigate between the turns that have already happened.
    const newSquares = currentSquares.slice();
    // Alternative way
    // const newSquares = [ ...squares ];
    newSquares[i] = getNextPlayer();
    // Store history
    // Keep only portion of history up until currentMove
    const nextHistory = [...history.slice(0, currentMove + 1), newSquares];
    setHistory(nextHistory);
    // Update currentMove to the latest history entry
    setCurrentMove(nextHistory.length - 1);
  };

  const handleReset = () => {
    setHistory([Array(9).fill(null)]);
    setCurrentMove(0);
    setGameDone(true);
    setWinnerColors(Array(9).fill("black"));
  };

  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
    // Revert the winner colors back to black
    setWinnerColors(Array(9).fill("black"));
    setGameDone(true);
  }

  const moves = history.map((squares, index) => {
    let description;
    if (index > 0) {
      description = "Go to move #" + index;
    } else {
      description = "Go to game start";
    }

    return (
      <li key={index}>
        <button onClick={() => jumpTo(index)}>{description}</button>
      </li>
    );
  });

  return (
    <div className="container">
      <h1>TicTacToe Tutorial</h1>
      <div className="game flex">
        <div className="game-board flex">
          <Board
            squares={currentSquares}
            winnerColors={winnerColors}
            status={status}
            onReset={handleReset}
            onSquareClick={handleClick}
          />
        </div>

        <div className="game-info flex">
          <ol>{moves}</ol>
        </div>
      </div>
    </div>
  );
}
