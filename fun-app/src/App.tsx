import Food from "./Components/Food";
import "./App.css";
import Breakfast from "./Components/Breakfast";
import { useState } from "react";

type FoodType = {
  name: string;
  locked: boolean;
};

const App = () => {
  const [foods] = useState<FoodType[]>([
    { name: "Apple", locked: true },
    { name: "Yoghurt", locked: false },
    { name: "Granola", locked: false },
    { name: "Avocado", locked: true },
  ]);
  const [isOverwrite, setIsOverwrite] = useState(false);
  const [overwrite] = useState("Pizza");

  return (
    <div className="App">
      <h1>Doug's Foodness</h1>
      <button onClick={() => setIsOverwrite(!isOverwrite)}>
        {isOverwrite ? "Health food!" : "Screw it m8, pizza"}
      </button>
      <Breakfast isOverwrite={isOverwrite} overwrite={overwrite}>
        {foods.map(({ name, locked }, i) => {
          return <Food key={i} foodName={name} locked={locked} />;
        })}
      </Breakfast>
    </div>
  );
};

export default App;
