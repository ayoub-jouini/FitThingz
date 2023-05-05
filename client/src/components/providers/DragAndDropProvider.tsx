"use client";

import { DndContext, DragEndEvent } from "@dnd-kit/core";
import ProgramDroppable from "../program/ProgramDroppable";
import { useEffect, useState } from "react";
import axios from "axios";

interface Items {
  id: string;
  name: string;
  number: number;
  type: string;
}

interface Props {
  program: string;
  day: string;
  children: React.ReactNode;
}

const DragAndDropProvider: React.FC<Props> = (props) => {
  const { program, day, children } = props;
  const [cartItems, setCartItems] = useState<Items[]>([]);

  useEffect(() => {
    const getData = async () => {
      const options = {
        method: "GET",
        url: `${process.env.NEXT_PUBLIC_BACK_URL}/api/programme/exercices/${program}/${day}`,
      };

      let response;

      try {
        response = await axios.request(options);
        setCartItems(response.data.exercices);
      } catch (error) {
        console.error(error);
      }
    };
    getData();
  }, []);

  const addItemsToCart = (e: DragEndEvent) => {
    const newItem: Items = {
      id: e.active.data.current?.id,
      name: e.active.data.current?.name,
      number: e.active.data.current?.number,
      type: e.active.data.current?.type,
    };
    if (e.over?.id !== "cart-droppable" || !newItem) return;
    const temp = [...cartItems];
    temp.push(newItem);
    setCartItems(temp);
  };

  const removeItemFromCart = (id: string) => {
    setCartItems(cartItems.filter((cartItem) => cartItem.id !== id));
  };

  return (
    <DndContext onDragEnd={addItemsToCart}>
      {children}
      <ProgramDroppable
        program={program}
        day={day}
        items={cartItems}
        removeItemFromCart={removeItemFromCart}
        setCartItems={setCartItems}
      />
    </DndContext>
  );
};

export default DragAndDropProvider;
