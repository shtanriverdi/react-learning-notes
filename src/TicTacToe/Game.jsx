import Board from "./Board";

export default function Game() {
  return (
    <div className="container">
      <h1>TicTacToe Tutorial</h1>
      <div className="game flex">
        <div className="game-board flex">
          <Board />
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
