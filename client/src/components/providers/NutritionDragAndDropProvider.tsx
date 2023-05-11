"use client";

import { DndContext, DragEndEvent } from "@dnd-kit/core";
import NutritionDroppable from "../nutrition/NutritionDroppable";
import { useEffect, useState } from "react";
import axios from "axios";

interface Items {
  FoodId: string;
  name: string;
}

interface Props {
  regime: string;
  day: string;
  children: React.ReactNode;
}

const NutritionDragAndDropProvider: React.FC<Props> = (props) => {
  const { regime, day, children } = props;
  const [cartItems, setCartItems] = useState<any>([]);

  useEffect(() => {
    const getData = async () => {
      const options = {
        method: "GET",
        url: `${process.env.NEXT_PUBLIC_BACK_URL}/api/regime/repas/${regime}/${day}`,
      };

      let response;

      try {
        response = await axios.request(options);
        setCartItems(response.data.repas);
        console.error(response.data.repas);
      } catch (error) {
        console.error(error);
      }
    };
    getData();
  }, []);

  const addItemsToCart = (e: DragEndEvent) => {
    const newItem: Items = {
      FoodId: e.active.data.current?.FoodId,
      name: e.active.data.current?.name,
    };
    if (e.over?.id == "cart-droppable") {
      const temp = [...cartItems];
      const newRepas = {
        titre: "repas",
        aliment: [newItem],
      };
      temp.push(newRepas);
      setCartItems(temp);
      //@ts-ignore
    } else if (e.over?.id.indexOf("repas-droppable") !== -1) {
      //@ts-ignore
      const str = e.over?.id.split("-");
      const temp = [...cartItems];
      temp[parseInt(str[2])].aliment.push(newItem);
      setCartItems(temp);
      console.log(cartItems);
    } else return;
  };

  const removeItemFromCart = (idx: number) => {
    const newCartItems = cartItems;
    newCartItems.splice(idx, 1);
    setCartItems([...newCartItems]);
  };

  return (
    <DndContext onDragEnd={addItemsToCart}>
      {children}
      <NutritionDroppable
        regime={regime}
        day={day}
        cartItems={cartItems}
        setCartItems={setCartItems}
        removeItemFromCart={removeItemFromCart}
      />
    </DndContext>
  );
};

export default NutritionDragAndDropProvider;
