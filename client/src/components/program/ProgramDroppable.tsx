"use client";

import { useDroppable } from "@dnd-kit/core";

interface Items {
  id: string;
  name: string;
  nb: number;
}

interface Props {
  items: Items[];
  removeItemFromCart: (id: string) => void;
}

const ProgramDroppable: React.FC<Props> = (props) => {
  const { setNodeRef } = useDroppable({
    id: "cart-droppable",
  });

  const handleChangeNb = (event: any) => {};
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
        {props.items.length === 0 && (
          <p className="text-textPrimary text-base">
            Drag here to create a Program
          </p>
        )}

        {props.items.map((item, idx) => (
          <div
            className="flex justify-between items-center w-5/6 py-3"
            key={`${item}-${idx}`}
          >
            <div className="h-7 w-7 rounded-full border-2 border-textPrimary" />
            <div className="flex justify-between items-center border-2 border-grisPrimary rounded-[45px] py-5 px-5 w-5/6">
              <div className="border-2 border-primary rounded-[11px] px-3 py-1">
                X
                <input
                  className="bg-tertiary w-5"
                  value={item.nb}
                  type="text"
                  onChange={handleChangeNb}
                />
              </div>
              <p className="text-textPrimary text-l">{item.name}</p>

              <div className="w-8 h-8 shadow rounded-[10px] flex justify-center items-center mx-2 cursor-pointer ">
                <img
                  alt=""
                  src="/icons/trashcanicon.svg"
                  onClick={() => props.removeItemFromCart(item.id)}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProgramDroppable;
