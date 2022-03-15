type FoodProps = {
  foodName: string;
  locked: boolean;
};

const Food: React.FC<FoodProps> = ({ foodName }) => {
  return <h3>{foodName}</h3>;
};

export default Food;
