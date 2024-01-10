export default function Events() {
  // Event handler function
  // Have names that start with handle, followed by the name of the event.
  const handleClick = (message) => {
    alert(message);
  }

  return (
    <Toolbar
      // Functions passed to event handlers must be passed, not called.
      onPlayMovie={() => handleClick('Playing Movie...')}
      onLoadImage={() => handleClick('Loading Image...')}
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

// By convention, event handler props should start with "on", followed by a capital letter.
// onSomethingAction
function Button({ onClick, children }) {
  return (
    <button onClick={onClick}>
      {children}
    </button>
  );
}