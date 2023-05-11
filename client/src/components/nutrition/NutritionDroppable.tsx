"use client";

import { useDroppable } from "@dnd-kit/core";
import Button from "../global/button/Button";
import { useSelector } from "react-redux";
import axios from "axios";
import NutritionDroppableItem from "./NutritionDroppableItem";

interface Props {
  regime: string;
  day: string;
  cartItems: any;
  setCartItems: (item: any) => void;
  removeItemFromCart: (idx: number) => void;
}

const NutritionDroppable: React.FC<Props> = (props) => {
  const { regime, day, cartItems, setCartItems, removeItemFromCart } = props;

  const auth: any = useSelector((state: any) => state.auth);

  const { setNodeRef } = useDroppable({
    id: "cart-droppable",
  });

  const handleSave = async (event: any) => {
    let regimeArray = [];
    for (let i = 0; i < cartItems.length; i++) {
      let alimentArray = [];
      for (let j = 0; j < cartItems[i].aliment.length; j++) {
        alimentArray.push(cartItems[i].aliment[j].FoodId);
      }
      regimeArray.push({
        titre: cartItems[i].titre,
        aliment: alimentArray,
      });
    }

    console.log(regimeArray);
    try {
      const response = await axios.patch(
        `${process.env.NEXT_PUBLIC_BACK_URL}/api/regime/repas/${regime}/${day}`,
        {
          repas: regimeArray,
        },
        {
          headers: {
            authorization: "Bearer " + auth.accessToken,
          },
        }
      );
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div
      className="border-2 border-grisPrimary rounded-[45px] col-span-2  h-[37.5rem] p-5"
      ref={setNodeRef}
    >
      <div
        className={`overflow-y-scroll  h-full w-full flex flex-col  items-center ${
          cartItems.length === 0 ? "justify-center" : "justify-start"
        }`}
      >
        <div className="w-5/6 flex justify-end">
          <Button handleButton={handleSave} text="Save" type="button" />
        </div>
        {cartItems.length === 0 && (
          <p className="text-textPrimary text-base">
            Drag here to create a Program
          </p>
        )}

        {cartItems.map((item: any, key: any) => (
          <NutritionDroppableItem
            key={key}
            idx={key}
            repas={item.titre}
            aliment={item.aliment}
            repasId={item._id}
            setCartItems={setCartItems}
            removeItemFromCart={removeItemFromCart}
            cartItems={cartItems}
          />
        ))}
      </div>
    </div>
  );
};

export default NutritionDroppable;
