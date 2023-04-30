"use client";

import { useState } from "react";
import CoachTarificationCarousel from "../coachTarification/CoachTarificationCarousel";
import CoachProfilePersonalInfo from "./CoachProfilePersonalInfo";
import EditCoachData from "./EditCoachData";
import EditTarificationModal from "../modals/EditTarificationModal";

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

const CoachData = {
  fistName: "Foulen",
  lastName: "elfouleni",
  email: "Foulenelfouleni@gmail.com",
  phone: "28726420",
  gender: "m",
  dateofbirth: "01/09/1995",
  diplome: "ijeza fel 3ouloum al e3lemeya",
  address: "megrine",
};

interface Props {
  showEdit: boolean;
  showReview: boolean;
}

const CoachProfileData: React.FC<Props> = (props) => {
  const { showEdit, showReview } = props;

  const [tarification, setTarification] = useState<number>(0);

  const [EditTarificationModalState, setEditTarificationModalState] =
    useState<boolean>(true);

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

  const ShowEditTrificationModal = () => {
    setEditTarificationModalState(true);
  };
  const hideEditTrificationModal = () => {
    setEditTarificationModalState(false);
  };

  return (
    <div className={`grid-cols-5 gap-5 ${!showReview ? "grid" : "hidden"}`}>
      <CoachProfilePersonalInfo
        firstName={CoachData.fistName}
        lastName={CoachData.lastName}
        email={CoachData.email}
        phone={CoachData.phone}
        gender={CoachData.gender}
        diplome={CoachData.diplome}
        adress={CoachData.address}
        birthDay={CoachData.dateofbirth}
        showEdit={showEdit}
      />
      <EditCoachData
        firstName={CoachData.fistName}
        lastName={CoachData.lastName}
        email={CoachData.email}
        phone={CoachData.phone}
        adress={CoachData.address}
        showEdit={showEdit}
      />
      <div className="px-10 py-7 border-2 border-grisPrimary rounded-[45px] col-span-2 ">
        {tarificationData.map((data, key) => (
          <>
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
              showEdit={showEdit}
              ShowEditTrificationModal={ShowEditTrificationModal}
            />
            <EditTarificationModal
              key={key}
              EditTarificationModal={EditTarificationModalState}
              ShowEditTrificationModal={hideEditTrificationModal}
              tarification={tarification}
              id={key}
              title={data.title}
              description={data.description}
              duration={3}
              price={data.price}
              promo={data.promo}
            />
          </>
        ))}
      </div>
    </div>
  );
};

export default CoachProfileData;
