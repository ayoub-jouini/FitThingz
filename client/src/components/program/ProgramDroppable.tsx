"use client";

import { useDroppable } from "@dnd-kit/core";
import Button from "../global/button/Button";
import { useSelector } from "react-redux";
import axios from "axios";
import DroppableItem from "./DroppableItem";

interface Items {
  id: string;
  name: string;
  number: number;
  type: string;
}

interface Props {
  program: string;
  day: string;
  items: Items[];
  removeItemFromCart: (id: string) => void;
  setCartItems: (item: any) => void;
}

const ProgramDroppable: React.FC<Props> = (props) => {
  const auth: any = useSelector((state: any) => state.auth);

  const { setNodeRef } = useDroppable({
    id: "cart-droppable",
  });

  const handleChangeNb = () => {};

  const handleSave = async (event: any) => {
    let exercises = [];
    for (let i = 0; i < props.items.length; i++) {
      const exercise = {
        number: props.items[i].number,
        name: props.items[i].name,
        type: props.items[i].type,
        exercice: props.items[i].id,
      };
      exercises.push(exercise);
    }

    try {
      const response = await axios.patch(
        `${process.env.NEXT_PUBLIC_BACK_URL}/api/programme/exercices/${props.program}/${props.day}`,
        {
          exercices: exercises,
        },
        {
          headers: {
            authorization: "Bearer " + auth.accessToken,
          },
        }
      );
      console.log(response);
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
          props.items.length === 0 ? "justify-center" : "justify-start"
        }`}
      >
        <div className="w-5/6 flex justify-end">
          <Button handleButton={handleSave} text="Save" type="button" />
        </div>
        {props.items.length === 0 && (
          <p className="text-textPrimary text-base">
            Drag here to create a Program
          </p>
        )}

        {props.items.map((item, key) => (
          <DroppableItem
            key={key}
            id={item.id}
            name={item.name}
            number={item.number}
            removeItemFromCart={props.removeItemFromCart}
            setCartItems={props.setCartItems}
            cartItems={props.items}
          />
        ))}
      </div>
    </div>
  );
};

export default ProgramDroppable;
