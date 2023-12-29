// import PassingStateDown from "./QuickStart/PassingStateDown";
import FilterableProductTable from "./ThinkingInReact/FilterableProductTable";
// import Game from "./TicTacToe/Game";
import products from './ThinkingInReact/data';

export default function App() {
  return (
    // <PassingStateDown />
    // <Game />
    <FilterableProductTable products={products} />
  );
}
