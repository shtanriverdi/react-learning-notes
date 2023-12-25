export default function Square({ value }) {
  const handleClick = () => {
    console.log(`Clicked`);
  };

  return (
    <button onClick={handleClick} className="square">
      {value}
    </button>
  );
}
