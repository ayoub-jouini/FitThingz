"use client";

import { useSelectedLayoutSegment } from "next/navigation";

import ExercicesTableRow from "./ExercicesTableRow";

interface Props {
  page?: string;
}

const data = [
  {
    id: 1,
    name: "program 1",
    type: "lose weight",
    duree: "14 days",
    tags: ["tag1", "tag2", "tag3"],
  },
  {
    id: 1,
    name: "program 1",
    type: "lose weight",
    duree: "14 days",
    tags: ["tag1", "tag2", "tag3"],
  },
  {
    id: 1,
    name: "program 1",
    type: "lose weight",
    duree: "14 days",
    tags: ["tag1", "tag2", "tag3"],
  },
];

const ExercicesTable: React.FC<Props> = (props) => {
  const { page } = props;

  return (
    <div className=" ">
      <div
        className={`w-full grid  px-10 h-24 content-center justify-items-center ${
          page === "myexercices" ? "grid-cols-5" : "grid-cols-4"
        }`}
      >
        <div className="text-textPrimary">Name</div>
        <div className="text-textPrimary">Target</div>
        <div className="text-textPrimary">Equipment</div>
        <div className="text-textPrimary">Tags</div>
        {page === "myexercices" && <div className=""></div>}
      </div>
      {data.map((d, key) => (
        <ExercicesTableRow
          key={key}
          id={d.id}
          name={d.name}
          type={d.type}
          duree={d.duree}
          tags={d.tags}
          page={page}
        />
      ))}
    </div>
  );
};

export default ExercicesTable;
