import { useState } from "react";
import "../App.css";
import { FoodProps, InputBreakfastProps } from "../Types";
import ToggleInputs from "./Wrappers/ToggleInputs";

const InputBreakfast: React.FC<InputBreakfastProps> = ({
  setFoods,
  isDisabled,
}) => {
  const [localBreakName, setLocalBreakName] = useState("");
  const [isLocalLocked, setIsLocalLocked] = useState(false);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setFoods((prevFoods: FoodProps[]) => [
      { name: localBreakName, locked: isLocalLocked },
      ...prevFoods,
    ]);
    setLocalBreakName("");
    setIsLocalLocked(false);
  };

  return (
    <div className="formToFill">
      <form onSubmit={handleSubmit}>
        <ToggleInputs isDisabled={isDisabled}>
          <input
            value={localBreakName}
            onChange={(e) => setLocalBreakName(e.target.value)}
          />
          <div>
            <ToggleInputs isDisabled={isDisabled}>
              <label htmlFor="lockBox">Is it locked?</label>
              <input
                name="lockBox"
                type="checkbox"
                checked={isLocalLocked}
                onChange={() => setIsLocalLocked(!isLocalLocked)}
              />
            </ToggleInputs>
          </div>
          <button type="submit">Add your breakfast!</button>
        </ToggleInputs>
      </form>
    </div>
  );
};

export default InputBreakfast;
