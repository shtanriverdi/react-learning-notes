/*
  It is a good idea to have multiple state variables
  if their state is unrelated:

    const [index, setIndex] = useState(0);
    const [showMore, setShowMore] = useState(false);

  if you have a form with many fields,
  it’s more convenient to have a single state variable
  that holds an object than state variable per field.

  State is isolated and private 
  State is local to a component instance on the screen.
  In other words, if you render the same component twice,
  each copy will have completely isolated state!
  Changing one of them will not affect the other.

  !state is fully private to the component declaring it
*/
export default function State() {
  return <></>;
}
