import Food from "./Components/Food";
import "./App.css";
import Breakfast from "./Components/Wrappers/Breakfast";
import { useState } from "react";
import { FoodType } from "./Types";
import InputBreakfast from "./Components/InputBreakfast";

const App = () => {
  const [foods, setFoods] = useState<FoodType[]>([
    { name: "Apple", locked: true },
    { name: "Yoghurt", locked: false },
    { name: "Granola", locked: false },
    { name: "Avocado", locked: true },
  ]);
  const [isOverwrite, setIsOverwrite] = useState(false);
  const [overwrite] = useState("Pizza");
  const [isDisabled, setIsDisabled] = useState(false);

  return (
    <div className="App">
      <h1>Doug's Foodness</h1>
      <button onClick={() => setIsOverwrite(!isOverwrite)}>
        {isOverwrite ? "Health food!" : "Screw it m8, pizza"}
      </button>
      <h2>Oooh look what I'm having for breakfast...</h2>
      <button onClick={() => setIsDisabled(!isDisabled)}>
        {isDisabled ? "More brekkie?" : "No more brekkie for you"}
      </button>
      <div>
        <InputBreakfast setFoods={setFoods} isDisabled={isDisabled} />
      </div>
      <Breakfast isOverwrite={isOverwrite} overwrite={overwrite}>
        {foods.map(({ name, locked }, i) => {
          return <Food key={i} foodName={name} locked={locked} />;
        })}
      </Breakfast>
    </div>
  );
};

export default App;
