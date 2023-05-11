"use client";

import axios from "axios";
import { useSelector } from "react-redux";

interface Props {
  id: string;
  avatar: string;
  name: string;
  phone: string;
  adress: string;
  date: string;
}

const CoachesRequestsTableRow: React.FC<Props> = (props) => {
  const { id, avatar, name, phone, adress, date } = props;

  const auth: any = useSelector((state: any) => state.auth);

  const validCoach = async () => {
    const response = await axios.patch(
      `${process.env.NEXT_PUBLIC_BACK_URL}/api/coach/validate/${id}`,
      {},
      {
        headers: {
          authorization: "Bearer " + auth.accessToken,
        },
      }
    );
  };

  const deleteCoach = async () => {
    const response = await axios.delete(
      `${process.env.NEXT_PUBLIC_BACK_URL}/api/coach/${id}`,
      {
        headers: {
          authorization: "Bearer " + auth.accessToken,
        },
      }
    );
  };

  return (
    <div className="w-full h-24 grid grid-cols-6 content-center border-b-2">
      <div className="">
        <div
          className="h-8 w-8 bg-cover"
          style={{ backgroundImage: `url(${avatar})` }}
        />
      </div>
      <div className="text-textPrimary">{name}</div>
      <div className="text-textPrimary">{phone}</div>
      <div className="text-textPrimary">{adress}</div>
      <div className="text-textPrimary">{date}</div>
      <div className="flex ">
        <div
          onClick={validCoach}
          className="cursor-pointer w-8 h-8 shadow rounded-[10px] flex justify-center items-center mx-2"
        >
          <img alt="" src="/icons/validicon.svg" />
        </div>
        <div
          onClick={deleteCoach}
          className="cursor-pointer w-8 h-8 shadow rounded-[10px] flex justify-center items-center mx-2"
        >
          <img alt="" src="/icons/deleteicon.svg" />
        </div>
      </div>
    </div>
  );
};

export default CoachesRequestsTableRow;
