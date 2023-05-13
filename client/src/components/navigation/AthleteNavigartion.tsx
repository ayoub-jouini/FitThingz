"use client";

import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";
import Button from "../global/button/Button";
import { useState } from "react";
import AthleteProgramModal from "../modals/AthleteProgramModal";

interface Props {
  id: string;
}

const AthleteNavigation: React.FC<Props> = (props) => {
  const { id } = props;

  const page = useSelectedLayoutSegment();

  const [showAthleteProgramModal, setAthleteProgramModal] =
    useState<boolean>(false);

  const handleAthleteProgramModal = () => {
    setAthleteProgramModal(!showAthleteProgramModal);
  };

  return (
    <div className="flex justify-between items-center">
      <div className="w-5/12 border-2 border-grisPrimary h-14 rounded-[45px] flex my-10">
        <Link
          href={`/dashboard/coach/athletes/${id}`}
          className={`h-14 rounded-[45px] flex items-center justify-center w-1/2 ${
            !page && "bg-primary text-tertiary"
          }`}
        >
          Informations
        </Link>
        <Link
          href={`/dashboard/coach/athletes/${id}/programs`}
          className={`h-14 rounded-[45px] flex items-center justify-center w-1/2 ${
            page === "programs" && "bg-primary text-tertiary"
          }`}
        >
          Programs
        </Link>
      </div>
      <Button
        handleButton={handleAthleteProgramModal}
        text="Add Program"
        style="outlined"
        type="button"
      />
      <AthleteProgramModal
        showAthleteProgramModal={showAthleteProgramModal}
        handleAthleteProgramModal={handleAthleteProgramModal}
        id={id}
      />
    </div>
  );
};

export default AthleteNavigation;
