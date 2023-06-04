"use client";

import axios from "axios";
import { useState } from "react";
import { useSelector } from "react-redux";

interface Props {
  id?: string;
  avatar: string;
  userName: string;
  description: string;
  rate: number;
}

const ReviewItem: React.FC<Props> = (props) => {
  const { id, avatar, userName, description, rate } = props;

  const auth: any = useSelector((state: any) => state.auth);

  const [display, setDisplay] = useState(true);

  const handleRemove = async () => {
    try {
      const response = await axios.patch(
        `${process.env.NEXT_PUBLIC_BACK_URL}/api/coach/commentaire/delete/${auth.id}/${id}`,
        {},
        {
          headers: {
            authorization: "Bearer " + auth.accessToken,
          },
        }
      );

      setDisplay(false);
    } catch (err) {
      console.log(err);
    }
  };
  let containedStars = [];
  for (let i = 0; i < rate; i++) {
    containedStars.push(
      <img alt="" src="/icons/containedstar.svg" className="mx-1" />
    );
  }

  let emptyStars = [];
  const emptyStarsNumber = 5 - rate;

  for (let i = 0; i < emptyStarsNumber; i++) {
    emptyStars.push(
      <img alt="" src="/icons/outlinedstar.svg" className="mx-1" />
    );
  }

  return (
    <>
      {display && (
        <div className="rounded-[45px] border-2 border-grisPrimary p-7 flex justify-between">
          <div className="flex">
            <div
              className="bg-cover rounded-full h-14 w-14 mr-5"
              style={{ backgroundImage: "url(/images/Group11234.png)" }}
            />
            <div className="">
              <p className="text-l text-textPrimary">"{description}"</p>
              <p className="text-sm text-grixSecondary my-2">{userName}</p>
              <div className="flex">{[containedStars, emptyStars]}</div>
            </div>
          </div>
          {auth.type === "coach" && (
            <div
              className="w-8 h-8 shadow rounded-[10px] flex justify-center items-center mx-2 cursor-pointer"
              onClick={handleRemove}
            >
              <img alt="" src="/icons/trashcanicon.svg" />
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default ReviewItem;
