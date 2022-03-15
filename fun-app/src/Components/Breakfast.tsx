import { Children, cloneElement, ReactElement, useState } from "react";

type breakfastProps = {
  setFoods: Function;
};

const Breakfast: React.FC<breakfastProps> = ({ children, setFoods }) => {
  const [isCloned, setisCloned] = useState(false);

  const handleClick = () => {
    setisCloned(!isCloned);
  };

  const childrenArray = Children.toArray(children);

  const clonedChildren = childrenArray.map((child: any) => {
    if (child.props.locked) {
      return child;
    } else {
      const clone = cloneElement(child as ReactElement<any>, {
        foodName: "Coffee",
      });
      return clone;
    }
  });

  return (
    <div>
      <h2>Oooh look what I'm having for breakfast...</h2>
      <button onClick={handleClick}>
        {isCloned ? "Izzit Cloned...?" : "Cloned Izzit..?"}
      </button>
      {isCloned ? clonedChildren : children}
    </div>
  );
};

export default Breakfast;
