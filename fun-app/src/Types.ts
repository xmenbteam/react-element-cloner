export type FoodType = {
  name: string;
  locked: boolean;
};

export type ToggleInputProps = {
  isDisabled: boolean;
};

export type BreakfastProps = {
  isOverwrite: boolean;
  overwrite: string;
};

export type FoodProps = {
  foodName: string;
  locked: boolean;
};

export type InputBreakfastProps = {
  setFoods: Function;
  isDisabled: boolean;
};
