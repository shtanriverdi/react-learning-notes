import { useState } from "react";
import Button from "Button.jsx";

export default function App() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount((prevCount) => {
      prevCount + 1;
    });
  };

  return (
    <>
      <div>React Basics</div>
      <Button count={count} onClick={handleClick} />
      <Button count={count} onClick={handleClick} />
    </>
  );
}
