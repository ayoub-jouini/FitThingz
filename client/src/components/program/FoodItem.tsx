interface Props {
  title: string;
  dosage: string;
  calories: string;
  carbs: string;
  fats: string;
  proteins: string;
}

const FoodItem: React.FC<Props> = (props) => {
  const { title, dosage, calories, carbs, fats, proteins } = props;
  return (
    <div className="w-10/12 flex justify-between my-1">
      <div className="w-1/12 flex items-center">
        <div className="border-2 border-grixSecondary rounded-full w-7 h-7" />
      </div>
      <div className="border-2 w-11/12 border-grisPrimary rounded-[45px] p-4 flex justify-between items-center">
        <div className="w-3/12">
          <p className="text-base text-secondary text-center">{title}</p>
        </div>
        <div className="grid grid-cols-5 w-9/12 h-full justify-items-center content-center">
          <p className="text-grixSecondary text-xs">{dosage}</p>
          <p className="text-grixSecondary text-xs">{calories}</p>
          <p className="text-grixSecondary text-xs">{carbs}g</p>
          <p className="text-grixSecondary text-xs">{fats}g</p>
          <p className="text-grixSecondary text-xs">{proteins}g</p>
        </div>
      </div>
    </div>
  );
};

export default FoodItem;
