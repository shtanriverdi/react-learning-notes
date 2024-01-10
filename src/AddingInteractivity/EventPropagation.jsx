/**
 * If you click on either button, its onClick will run first,
 * followed by the parent <div>’s onClick. So two messages will appear.
 * If you click the toolbar itself, only the parent <div>’s onClick will run.
 *
 * All events propagate in React except onScroll,
 * which only works on the JSX tag you attach it to.
 */

function SignupForm() {
  return (
    <form
      onClick={(e) => e.stopPropagation()}
      onSubmit={(e) => {
        /*
      Don’t confuse e.stopPropagation() and e.preventDefault().
      They are both useful, but are unrelated:
      "e.stopPropagation()" stops the event handlers attached to the tags above from firing.
      "e.preventDefault()" prevents the default browser behavior for the few events that have it. 
      */
        e.stopPropagation(); // This has no effect on either input or button!
        e.preventDefault(); // Stops refreshing the page after submit
      }}>
      <input />
      <button>Send</button>
    </form>
  );
}

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
      <Button onClick={() => alert("Play Movie")}>Play Movie</Button>
      <Button onClick={() => alert("Upload Image")}>Upload Image</Button>
      <SignupForm />
    </div>
  );
}
