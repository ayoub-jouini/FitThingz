"use client";

import { DndContext, DragEndEvent } from "@dnd-kit/core";
import ProgramDroppable from "../program/ProgramDroppable";
import { useState } from "react";

interface Items {
  id: string;
  name: string;
  nb: number;
}

const DragAndDropProvider = ({ children }: { children: React.ReactNode }) => {
  const [cartItems, setCartItems] = useState<Items[]>([]);

  const addItemsToCart = (e: DragEndEvent) => {
    const newItem: Items = {
      id: e.active.data.current?.id,
      name: e.active.data.current?.name,
      nb: 10,
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
        items={cartItems}
        removeItemFromCart={removeItemFromCart}
      />
    </DndContext>
  );
};

export default DragAndDropProvider;
