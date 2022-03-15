import { Children, cloneElement, ReactElement, useState } from "react";
import Food from "./Food";

type breakfastProps = {
  isOverwrite: boolean;
  overwrite: string;
};

const Breakfast: React.FC<breakfastProps> = ({
  children,
  isOverwrite,
  overwrite,
}) => {
  const [isCloned, setisCloned] = useState(false);

  console.log({ overwrite });

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

  const childrenToRender = () => {
    return <h3>{isCloned ? clonedChildren : children}</h3>;
  };

  return (
    <div>
      <h2>Oooh look what I'm having for breakfast...</h2>
      <button onClick={handleClick}>
        {isCloned ? "Izzit Coffee...?" : "Coffee Izzit..?"}
      </button>
      {isOverwrite ? (
        <Food foodName={overwrite} locked={false} />
      ) : (
        childrenToRender()
      )}
    </div>
  );
};

export default Breakfast;
