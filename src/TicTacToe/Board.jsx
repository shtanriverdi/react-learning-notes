import Square from "./Square";

export default function Board({
  status,
  squares,
  winnerColors,
  onReset,
  onSquareClick
}) {

  return (
    <>
      <h1>{status}</h1>
      <div className="board-row">
        <Square
          color={winnerColors[0]}
          value={squares[0]}
          onSquareClick={() => onSquareClick(0)}
        />
        <Square
          color={winnerColors[1]}
          value={squares[1]}
          onSquareClick={() => onSquareClick(1)}
        />
        <Square
          color={winnerColors[2]}
          value={squares[2]}
          onSquareClick={() => onSquareClick(2)}
        />
      </div>
      <div className="board-row">
        <Square
          color={winnerColors[3]}
          value={squares[3]}
          onSquareClick={() => onSquareClick(3)}
        />
        <Square
          color={winnerColors[4]}
          value={squares[4]}
          onSquareClick={() => onSquareClick(4)}
        />
        <Square
          color={winnerColors[5]}
          value={squares[5]}
          onSquareClick={() => onSquareClick(5)}
        />
      </div>
      <div className="board-row">
        <Square
          color={winnerColors[6]}
          value={squares[6]}
          onSquareClick={() => onSquareClick(6)}
        />
        <Square
          color={winnerColors[7]}
          value={squares[7]}
          onSquareClick={() => onSquareClick(7)}
        />
        <Square
          color={winnerColors[8]}
          value={squares[8]}
          onSquareClick={() => onSquareClick(8)}
        />
      </div>
      <button className="btn" onClick={onReset}>
        Reset Game
      </button>
    </>
  );
}
