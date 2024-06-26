"use client";

import { useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";

interface Props {
  _id: string;
  name: string;
  type: string;
  number: number;
}

const MyExercisesItem: React.FC<Props> = (props) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: props._id,
    data: {
      name: props.name,
      exerciseId: props._id,
      type: props.type,
      number: props.number,
    },
  });
  return (
    <div
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      style={{ transform: CSS.Translate.toString(transform) }}
      className="border-2 border-grisPrimary rounded-[54px] px-5 py-2 flex justify-between items-center my-2 "
    >
      <p className="">{props.name}</p>
      <img alt="" src="/icons/menuicon.svg" />
    </div>
  );
};

export default MyExercisesItem;
