"use client";

import AdminCoachModal from "../../../components/modals/AdminCoachModal";
import axios from "axios";
import { useState } from "react";
import { useSelector } from "react-redux";

interface Props {
  id: string;
  avatar: string;
  name: string;
  phone: string;
  adress: string;
  date: string;
  cin: string;
  college: string;
  diploma: string;
}

const CoachesRequestsTableRow: React.FC<Props> = (props) => {
  const { id, avatar, name, phone, adress, date, cin, college, diploma } =
    props;

  const auth: any = useSelector((state: any) => state.auth);

  const [showAdminCoachtModal, setShowAdminCoachtModal] =
    useState<boolean>(false);

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

  const handleAdminCoachModal = () => {
    setShowAdminCoachtModal(!showAdminCoachtModal);
  };

  return (
    <>
      <div className="w-full h-24 grid grid-cols-6 content-center border-b-2">
        <div
          className="col-span-5 grid grid-cols-5 cursor-pointer"
          onClick={handleAdminCoachModal}
        >
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
        </div>
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
      <AdminCoachModal
        showAdminCoachtModal={showAdminCoachtModal}
        handleAdminCoachModal={handleAdminCoachModal}
        cin={cin}
        college={college}
        diploma={diploma}
        name={name}
      />
    </>
  );
};

export default CoachesRequestsTableRow;
