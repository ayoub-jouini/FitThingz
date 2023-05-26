"use client";

import axios from "axios";
import { useState } from "react";
import { useSelector } from "react-redux";

interface Props {
  id: number;
  name: string;
  bodyPart: string;
  target: string;
  equipment: string[];
  gifUrl: string;
  page?: string;
}

const ExercicesTableRow: React.FC<Props> = (props) => {
  const { id, name, bodyPart, target, equipment, gifUrl, page = false } = props;

  let auth: any = useSelector((state: any) => state.auth);

  const [display, setDisplay] = useState(true);

  const handleRemove = async () => {
    const response = await axios.delete(
      `${process.env.NEXT_PUBLIC_BACK_URL}/api/exercice/${id}`,
      {
        headers: {
          authorization: "Bearer " + auth.accessToken,
        },
      }
    );

    setDisplay(false);
  };

  return (
    <>
      {display && (
        <div
          className={`rounded-[45px] px-10 grid content-center justify-items-center items-center h-32 border-2 border-grisPrimary my-5 ${
            page === "myexercices" ? "grid-cols-5" : "grid-cols-4"
          }`}
        >
          <div className="text-textPrimary">{name}</div>
          <div className="text-textPrimary">{bodyPart}</div>
          <div className="text-textPrimary">{target}</div>
          <div className="text-textPrimary">{equipment}</div>
          {page === "myexercices" && (
            <div className="flex ">
              <div className="w-8 h-8 shadow rounded-[10px] flex justify-center items-center mx-2">
                <img alt="" src="/icons/editicon.svg" />
              </div>
              <div
                onClick={handleRemove}
                className="w-8 h-8 shadow rounded-[10px] flex justify-center items-center mx-2 cursor-pointer"
              >
                <img alt="" src="/icons/trashcanicon.svg" />
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default ExercicesTableRow;
