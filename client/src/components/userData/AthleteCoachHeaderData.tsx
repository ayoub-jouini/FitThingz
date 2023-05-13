"use client";

import { useSelector } from "react-redux";
import Button from "../global/button/Button";
import axios from "axios";
import RateAndReview from "../modals/RateAndReview";
import { useState } from "react";

interface Props {
  coachData: any;
}

const AthleteCoachHeaderData: React.FC<Props> = (props) => {
  const { coachData } = props;

  const auth: any = useSelector((state: any) => state.auth);

  const [showRateModal, setShowRateModal] = useState<boolean>(false);

  const handleRate = () => {
    setShowRateModal(!showRateModal);
  };

  const handleRequest = async () => {
    try {
      const response = await axios.patch(
        `${process.env.NEXT_PUBLIC_BACK_URL}/api/coach/sportif/request/${coachData._id}`,
        {},
        {
          headers: {
            authorization: "Bearer " + auth.accessToken,
          },
        }
      );
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="h-72 border-2 border-grisPrimary rounded-[45px] grid grid-cols-3 py-5 px-20 gap-20">
      <div className="border-r-2 border-grisPrimary flex justify-between items-center col-span-2">
        <div
          className="bg-cover rounded-full h-32 w-32"
          style={{ backgroundImage: "url(/images/Group11234.png)" }}
        />
        <div className="w-9/12">
          <p className="text-2xl text-textPrimary">{`${coachData.user.prenom} ${coachData.user.nom}`}</p>
          <div className="flex ">
            <div className="flex flex-col items-center ">
              <p className="text-lg text-textPrimary">4</p>
              <p className="text-lg text-textPrimary font-semibold">Clients</p>
            </div>
            <div className="flex flex-col items-center px-20">
              <p className="text-lg text-textPrimary">6</p>
              <p className="text-lg text-textPrimary font-semibold">Programs</p>
            </div>
            <div className="flex flex-col items-center ">
              <p className="text-lg text-textPrimary">5</p>
              <p className="text-lg text-textPrimary font-semibold">Diets</p>
            </div>
          </div>
        </div>
      </div>
      <div className="h-full">
        <div className="h-full flex items-center flex-col justify-center">
          <p className="text-2xl text-textPrimary my-3">4.7</p>
          <div className="flex">
            <img className="mx-1" alt="" src="/icons/containedstar.svg" />
            <img className="mx-1" alt="" src="/icons/containedstar.svg" />
            <img className="mx-1" alt="" src="/icons/containedstar.svg" />
            <img className="mx-1" alt="" src="/icons/containedstar.svg" />
            <img className="mx-1" alt="" src="/icons/outlinedstar.svg" />
          </div>
          <div className="my-5 flex ">
            <div className="mx-1">
              <Button
                handleButton={handleRate}
                size="s"
                text="Rate"
                type="button"
              />
              <RateAndReview
                showRateModal={showRateModal}
                handleRateModal={handleRate}
                id={coachData._id}
              />
            </div>
            <div className="mx-1">
              <Button
                handleButton={handleRequest}
                size="s"
                text="Send Request"
                style="outlined"
                type="button"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AthleteCoachHeaderData;
