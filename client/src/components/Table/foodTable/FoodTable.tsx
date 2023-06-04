import FoodTableRow from "./FoodTableRow";

interface Props {
  page: string;
  food: any;
}

const FoodTable: React.FC<Props> = (props) => {
  const { page, food } = props;

  return (
    <div className=" ">
      <div className={`w-full px-10 h-24 flex`}>
        <div className="w-1/4" />
        <div className="w-3/4 grid grid-cols-6 justify-items-center content-center">
          <div className="text-textPrimary">Dosage</div>
          <div className="text-textPrimary">Calories</div>
          <div className="text-textPrimary">Carbs</div>
          <div className="text-textPrimary">Fats</div>
          <div className="text-textPrimary">Proteins</div>
          <div className="" />
        </div>
      </div>
      {food.map((d: any, key: number) => (
        <FoodTableRow
          key={key}
          id={d._id}
          titre={d.titre}
          category={d.category}
          description={d.description}
          dosage={d.dosage}
          calories={d.calories}
          carbs={d.carbs}
          fats={d.fats}
          proteins={d.proteins}
          image={d.image}
        />
      ))}
    </div>
  );
};

export default FoodTable;
