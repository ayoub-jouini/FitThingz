"use client";

import { useState } from "react";
import CoachTarificationCarousel from "../coachTarification/CoachTarificationCarousel";

const tarificationData = [
  {
    id: "t1",
    title: "1 month subscription",
    description:
      "So, if you are ready to take action and achieve your goals, sign up for my 1-month coaching subscription today and let's get started!",
    duration: "4 weeks",
    price: 60,
    promo: "_",
  },
  {
    id: "t2",
    title: "2 month subscription",
    description:
      "So, if you are ready to take action and achieve your goals, sign up for my 1-month coaching subscription today and let's get started!",
    duration: "8 weeks",
    price: 80,
    promo: "_",
  },
  {
    id: "t3",
    title: "3 month subscription",
    description:
      "So, if you are ready to take action and achieve your goals, sign up for my 1-month coaching subscription today and let's get started!",
    duration: "3 weeks",
    price: 20,
    promo: "_",
  },
];

interface Props {}

const CoachProfileData: React.FC<Props> = (props) => {
  const [tarification, setTarification] = useState<number>(0);

  const handleNextTarification = () => {
    if (tarification + 1 === tarificationData.length) {
      setTarification(0);
    } else {
      setTarification(tarification + 1);
    }
  };

  const handlePreviousTarification = () => {
    if (tarification === 0) {
      setTarification(tarificationData.length - 1);
    } else {
      setTarification(tarification - 1);
    }
  };

  return (
    <div className="grid grid-cols-5 gap-5">
      <div className=" border-2 border-grisPrimary rounded-[45px] flex flex-col items-center col-span-3 px-20 py-7">
        <div className=" flex justify-between w-full">
          <div className="">
            <div className="flex my-4">
              <p className="text-base text-textPrimary">First name :</p>
              <p className="text-base text-grixSecondary mx-3">Foulen</p>
            </div>
            <div className="flex my-4">
              <p className="text-base text-textPrimary">Password :</p>
              <p className="text-base text-grixSecondary mx-3">***********</p>
            </div>
            <div className="flex my-4">
              <p className="text-base text-textPrimary">Gender :</p>
              <p className="text-base text-grixSecondary mx-3">Male</p>
            </div>
          </div>
          <div className="">
            <div className="flex my-4">
              <p className="text-base text-textPrimary">Last name :</p>
              <p className="text-base text-grixSecondary mx-3">elfouleni</p>
            </div>
            <div className="flex my-4">
              <p className="text-base text-textPrimary">date of birth :</p>
              <p className="text-base text-grixSecondary mx-3">01/09/1995</p>
            </div>
            <div className="flex my-4">
              <p className="text-base text-textPrimary">phone :</p>
              <p className="text-base text-grixSecondary mx-3">28726420</p>
            </div>
          </div>
        </div>
        <div className="flex self-start">
          <p className="text-base text-textPrimary">Email :</p>
          <p className="text-base text-grixSecondary mx-3">
            Foulenelfouleni@gmail.com
          </p>
        </div>
        <div className="flex self-start my-4">
          <p className="text-base text-textPrimary">Diploma :</p>
          <p className="text-base text-grixSecondary mx-3">
            ijeza fel 3ouloum al e3lemeya
          </p>
        </div>
      </div>
      <div className="px-10 py-7 border-2 border-grisPrimary rounded-[45px] col-span-2 ">
        {tarificationData.map((data, key) => (
          <CoachTarificationCarousel
            key={key}
            id={key}
            title={data.title}
            description={data.description}
            duration={data.duration}
            price={data.price}
            promo={data.promo}
            tarification={tarification}
            handleNextTarification={handleNextTarification}
            handlePreviousTarification={handlePreviousTarification}
          />
        ))}
      </div>
    </div>
  );
};

export default CoachProfileData;
