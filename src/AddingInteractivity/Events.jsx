export default function Events() {
  return (
    <Toolbar
      onPlayMovie={() => alert('Playing Movie...')}
      onLoadImage={() => alert('Loading Image...')}
    />
  );
}

function Toolbar({ onPlayMovie, onLoadImage }) {
  return (
    <div>
      <Button onClick={onPlayMovie}>
        Play Movie
      </Button>
      <Button onClick={onLoadImage}>
        Upload Image
      </Button>
    </div>
  );
}

function Button({ onClick, children }) {
  return (
    <button onClick={onClick}>
      {children}
    </button>
  );
}