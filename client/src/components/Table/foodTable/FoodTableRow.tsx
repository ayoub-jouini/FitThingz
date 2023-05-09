interface Props {
  id: number;
  titre: string;
  dosage: string;
  calories: string;
  carbs: string;
  fats: string;
  proteins: string;
  image: string;
}

const FoodTableRow: React.FC<Props> = (props) => {
  const { id, titre, dosage, calories, carbs, fats, proteins, image } = props;

  return (
    <div
      className={`rounded-[45px] pr-10 flex h-32 border-2 border-grisPrimary my-5`}
    >
      <div
        className="w-1/4 h-full bg-cover rounded-[45px] "
        style={{ backgroundImage: `url("${image}")` }}
      >
        <div className="bg-black/40 rounded-[45px] w-full h-full text-tertiary flex justify-center items-center font-bold text-xl">
          {titre}
        </div>
      </div>
      <div className="w-3/4 grid grid-cols-6 justify-items-center content-center">
        <div className="text-textPrimary">{dosage}</div>
        <div className="text-textPrimary">{calories}</div>
        <div className="text-textPrimary">{carbs}</div>
        <div className="text-textPrimary">{fats}</div>
        <div className="text-textPrimary">{proteins}</div>

        <div className="flex ">
          <div className="w-8 h-8 shadow rounded-[10px] flex justify-center items-center mx-2">
            <img alt="" src="/icons/editicon.svg" />
          </div>
          <div className="w-8 h-8 shadow rounded-[10px] flex justify-center items-center mx-2">
            <img alt="" src="/icons/trashcanicon.svg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodTableRow;
