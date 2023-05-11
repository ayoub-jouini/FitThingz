"use client";

import { useState } from "react";
import { useDroppable } from "@dnd-kit/core";

interface Props {
  repas: string;
  repasId: string;
  setCartItems: (event: any) => void;
  aliment: any;
  idx: number;
  removeItemFromCart: (idx: number) => void;
  cartItems: any;
}

const NutritionDroppableItem: React.FC<Props> = (props) => {
  const {
    repas,
    repasId,
    setCartItems,
    cartItems,
    aliment,
    idx,
    removeItemFromCart,
  } = props;

  const { setNodeRef } = useDroppable({
    id: `repas-droppable-${idx}`,
    data: {
      nb: idx,
    },
  });

  const changeRepas = (event: any) => {
    const newRepas = cartItems;
    newRepas[idx].titre = event.target.value;
    setCartItems([...newRepas]);
  };

  const removeAlimentFromRepas = (index: number) => {
    const newRepas = cartItems;
    newRepas[idx].aliment.splice(index, 1);
    setCartItems([...newRepas]);
  };

  return (
    <div className="w-5/6" ref={setNodeRef}>
      <div className="flex justify-between items-center w-full py-3">
        <div className="h-7 w-7 rounded-full border-2 border-textPrimary" />
        <div className="flex justify-between items-center border-2 border-grisPrimary rounded-[45px] py-5 px-5 w-5/6">
          <div className="rounded-[11px] px-3 py-1">
            <input
              className="bg-tertiary w-28"
              value={repas}
              type="text"
              onChange={changeRepas}
            />
          </div>
          <div className="border-2 border-primary px-3 py-1 rounded-[11px] ">
            ds
          </div>

          <div
            onClick={() => removeItemFromCart(idx)}
            className="w-8 h-8 shadow rounded-[10px] flex justify-center items-center mx-2 cursor-pointer "
          >
            <img alt="" src="/icons/trashcanicon.svg" />
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col items-end">
        {aliment &&
          aliment.map((food: any, key: any) => (
            <div className="w-4/6 my-2 flex items-center justify-between">
              <div className="h-5 w-5 rounded-full border-2 border-primary" />
              <div className="flex justify-between items-center border-2 border-grisPrimary rounded-[45px] py-2 px-5 w-5/6">
                {food.name}
                <div
                  onClick={() => removeAlimentFromRepas(key)}
                  className="w-8 h-8 shadow rounded-[10px] flex justify-center items-center mx-2 cursor-pointer "
                >
                  <img alt="" src="/icons/trashcanicon.svg" />
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default NutritionDroppableItem;
