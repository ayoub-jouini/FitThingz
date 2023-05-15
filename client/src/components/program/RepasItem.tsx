"use client";

import { useState } from "react";
import FoodItem from "./FoodItem";

interface Props {
  aliment: any;
  title: string;
}

const RepasItem: React.FC<Props> = (props) => {
  const { aliment, title } = props;

  const [showFood, setShowFood] = useState<boolean>(false);

  const handleShowFood = () => {
    setShowFood(!showFood);
  };

  return (
    <div className="">
      <div
        onClick={handleShowFood}
        className="flex justify-between items-center my-5 cursor-pointer"
      >
        <div className="w-1/12 flex items-center">
          <div className="border-2 border-grixSecondary rounded-full w-7 h-7" />
        </div>
        <div className="border-2 border-grisPrimary rounded-[45px] flex p-5 justify-between items-center w-11/12">
          <div className="flex justify-between w-5/12 px-10">
            <p className="text-lg text-secondary">{title}</p>
            <div className="text-sm rounded-[11px] border-2 text-grixSecondary border-primary p-1">
              266 calories
            </div>
          </div>
          <div className="flex ">
            <div className="w-8 h-8 flex justify-center items-center mx-2">
              <img alt="" src="/icons/Vector1.svg" />
            </div>
          </div>
        </div>
      </div>
      {showFood && (
        <div className="flex flex-col items-end">
          <div className="w-10/12 flex justify-end px-4 py-2">
            <div className="grid grid-cols-5 w-9/12 h-full justify-items-center content-center">
              <p className="text-secondary text-xs">Dosage</p>
              <p className="text-secondary text-xs">Calories</p>
              <p className="text-secondary text-xs">Carbs</p>
              <p className="text-secondary text-xs">Fats</p>
              <p className="text-secondary text-xs">Proteins</p>
            </div>
          </div>
          {aliment.map((food: any, key: any) => (
            <FoodItem
              title={food.titre}
              dosage={food.dosage}
              calories={food.calories}
              carbs={food.carbs}
              fats={food.fats}
              proteins={food.proteins}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default RepasItem;
