"use client";

import { useDroppable } from "@dnd-kit/core";
import Button from "../global/button/Button";
import { useSelector } from "react-redux";
import axios from "axios";
import DroppableItem from "./DroppableItem";

interface Items {
  exerciseId: string;
  name: string;
  number: number;
  type: string;
}

interface Props {
  program: string;
  day: string;
  cartItems: Items[];
  setCartItems: (item: any) => void;
  removeItemFromCart: (idx: number) => void;
}

const ProgramDroppable: React.FC<Props> = (props) => {
  const { program, day, cartItems, setCartItems, removeItemFromCart } = props;

  const auth: any = useSelector((state: any) => state.auth);

  const { setNodeRef } = useDroppable({
    id: "cart-droppable",
  });

  const handleSave = async (event: any) => {
    let exercises = [];
    for (let i = 0; i < cartItems.length; i++) {
      const exercise = {
        number: cartItems[i].number,
        name: cartItems[i].name,
        type: cartItems[i].type,
        exerciseId: cartItems[i].exerciseId,
      };
      exercises.push(exercise);
    }

    try {
      const response = await axios.patch(
        `${process.env.NEXT_PUBLIC_BACK_URL}/api/programme/exercices/${program}/${day}`,
        {
          exercices: exercises,
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

        {cartItems.map((item, key) => (
          <DroppableItem
            key={key}
            idx={key}
            exerciseId={item.exerciseId}
            name={item.name}
            number={item.number}
            setCartItems={setCartItems}
            cartItems={cartItems}
            removeItemFromCart={removeItemFromCart}
          />
        ))}
      </div>
    </div>
  );
};

export default ProgramDroppable;
