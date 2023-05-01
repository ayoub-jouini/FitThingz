"use client";

import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";
import Button from "../global/button/Button";
import CreateExerciceModal from "../../components/modals/CreateExerciceModal";
import { useState } from "react";

interface Props {
  bodypart: string;
}

const ExercicesNavigation: React.FC<Props> = (props) => {
  const { bodypart } = props;

  const [showCreateExerciseModal, setshowCreateExerciseModal] =
    useState<boolean>(false);

  const handleCreateExerciseModal = () => {
    setshowCreateExerciseModal(!showCreateExerciseModal);
  };

  const page = useSelectedLayoutSegment();

  return (
    <div className="flex justify-between items-center">
      <div className="w-5/12 border-2 border-grisPrimary h-14 rounded-[45px] flex my-10">
        <Link
          href={`/dashboard/coach/exercises/${bodypart}`}
          className={`h-14 rounded-[45px] flex items-center justify-center w-1/2 ${
            !page && "bg-primary text-tertiary"
          }`}
        >
          Exercise library
        </Link>
        <Link
          href={`/dashboard/coach/exercises/${bodypart}/myexercises`}
          className={`h-14 rounded-[45px] flex items-center justify-center w-1/2 ${
            page === "myexercises" && "bg-primary text-tertiary"
          }`}
        >
          My Exercises
        </Link>
      </div>
      <div className="flex ">
        <div className="mx-3 rounded-xl text-primary font-medium bg-tertiary border-primary border-2  cursor-pointer h-12 w-48 text-base flex justify-center items-center">
          <img alt="" src="/icons/filtericon.svg" className="mx-2" />
          <p className="mx-2">Filter</p>
        </div>
        <Button
          text="Create Exercice"
          type="button"
          handleButton={handleCreateExerciseModal}
          size="l"
        />
      </div>
      <CreateExerciceModal
        showCreateExerciseModal={showCreateExerciseModal}
        handleCreateExerciseModal={handleCreateExerciseModal}
      />
    </div>
  );
};

export default ExercicesNavigation;
