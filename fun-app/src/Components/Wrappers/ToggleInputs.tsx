import { Children, cloneElement, ReactElement } from "react";
import { ToggleInputProps } from "../../Types";

const ToggleInputs: React.FC<ToggleInputProps> = ({ children, isDisabled }) => {
  const childrenArray = Children.toArray(children);

  const clonedChildren = childrenArray.map((child: any) => {
    if (isDisabled) {
      const clone = cloneElement(child as ReactElement<any>, {
        disabled: true,
      });
      return clone;
    } else return child;
  });

  const childrenToRender = () => {
    return isDisabled ? clonedChildren : children;
  };

  return <div>{childrenToRender()}</div>;
};

export default ToggleInputs;
