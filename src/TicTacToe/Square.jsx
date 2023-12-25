export default function Square({ value, onSquareClick, color }) {
  return (
    <button
      style={{ color: color }}
      onClick={onSquareClick}
      className="square">
      {value}
    </button>
  );
}
