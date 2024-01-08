// React components are regular JavaScript functions,
// but their names must start with a capital letter
// or they won’t work!
export function Profile() {
  const style = {
    width: "100px",
    height: "100px",
  };
  
  return (
    <section>
      <img
        style={style}
        src="https://i.imgur.com/tCRRB0v.jpeg"
        alt="Katherine Johnson"
        />
    </section>
  );
}


/*
  A file can have no more than one default export,
  but it can have as many named exports as you like.

  Default(You can import with any name):
  export default function Button() {}
  import Button from './Button.js';

  Named(the name has to match on both sides):
  export function Button() {}
  import { Button } from './Button.js';
*/
export default function Gallery() {
  return (
    <section>
      <h1>Schön Cats</h1>
      <Profile />
      <Profile />
      <Profile />
    </section>
  );
}