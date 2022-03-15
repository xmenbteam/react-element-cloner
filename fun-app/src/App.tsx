import Food from "./Components/Food";
import "./App.css";
import Breakfast from "./Components/Breakfast";
import { useState } from "react";

type FoodType = {
  name: string;
  locked: boolean;
};

const App = () => {
  const [foods, setFoods] = useState<FoodType[]>([
    { name: "Apple", locked: true },
    { name: "Big Mac", locked: false },
    { name: "Cheese", locked: false },
    { name: "Primula", locked: true },
  ]);
  return (
    <div className="App">
      <h1>Doug's Foodness</h1>
      <Breakfast setFoods={setFoods}>
        {foods.map(({ name, locked }, i) => {
          return <Food key={i} foodName={name} locked={locked} />;
        })}
      </Breakfast>
    </div>
  );
};

export default App;
