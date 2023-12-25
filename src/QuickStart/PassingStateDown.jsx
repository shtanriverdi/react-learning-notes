import { useState } from "react";
import Button from "../Button";

export default function PassingStateDown() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount((prevCount) => {
      // Return the new count
      return prevCount + 1;
    });
    // Alternative
    // setCount(count + 1);
  };

  return (
    <>
      <h1>React Basics, Passing State Down</h1>
      <Button count={count} onClick={handleClick} />
      <Button count={count} onClick={handleClick} />
    </>
  );
}
