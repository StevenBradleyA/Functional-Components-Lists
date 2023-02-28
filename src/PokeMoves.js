import { moves } from "./data.js";
import PokeMoveCard from "./PokeMoveCard.js";

const PokeMoves = () => {
  return (
    <div>
      <h1>PokeMoves</h1>
      <ul>
        {moves.map((item) => (
          // <li key={item.id}>
          //   {item.id}. {item.move}
          // </li>
          <PokeMoveCard key={item.id} allVal={{...item}} />
        ))}
      </ul>
    </div>
  );
};

export default PokeMoves;
