/**
 * If you click on either button, its onClick will run first,
 * followed by the parent <div>’s onClick. So two messages will appear.
 * If you click the toolbar itself, only the parent <div>’s onClick will run.
 *
 * All events propagate in React except onScroll,
 * which only works on the JSX tag you attach it to.
 */

function Button({ onClick, children }) {
  return (
    <button
      onClick={(e) => {
        // Disable event bubbling
        e.stopPropagation();
        onClick();
      }}>
      {children}
    </button>
  );
}

export default function EventPropagation() {
  return (
    <div onClick={() => alert("Div")}>
      <Button onClick={() => alert("Play Movie")}>
        Play Movie
      </Button>
      <Button onClick={() => alert("Upload Image")}>
        Upload Image
      </Button>
    </div>
  );
}
