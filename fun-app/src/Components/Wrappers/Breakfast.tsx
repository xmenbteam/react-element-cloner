import { Children, cloneElement, ReactElement, useState } from "react";
import { BreakfastProps } from "../../Types";
import Food from "../Food";

const Breakfast: React.FC<BreakfastProps> = ({
  children,
  isOverwrite,
  overwrite,
}) => {
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

  const childrenToRender = () => {
    if (isOverwrite) {
      return <Food foodName={overwrite} locked={false} />;
    } else {
      return isCloned ? clonedChildren : children;
    }
  };

  return (
    <div className="breakfast">
      <button onClick={handleClick}>
        {isCloned ? "Izzit Coffee...?" : "Coffee Izzit..?"}
      </button>
      {childrenToRender()}
    </div>
  );
};

export default Breakfast;
