"use client";

import { useState } from "react";
import Button from "../global/button/Button";
import CreateProgramModal from "../modals/CreateProgramModal";

interface Props {}

const ProgramsNavigation: React.FC<Props> = (props) => {
  const [showCreateProgramModal, setShowCreateProgramModal] =
    useState<boolean>(false);

  const handleCreateProgramModal = () => {
    setShowCreateProgramModal(!showCreateProgramModal);
  };

  return (
    <div className="w-full  h-14 flex justify-between my-10 items-center">
      <div className="h-14 rounded-[45px] w-52 flex items-center justify-center bg-primary text-tertiary">
        Programs
      </div>
      <div className="flex">
        <div
          className={`rounded-xl mx-5 text-primary font-medium bg-tertiary border-primary border-2  cursor-pointer h-12 w-48 text-base justify-center items-center flex`}
        >
          <img alt="" src="/icons/editicon.svg" className="mx-2" />
          <p className="mx-2">Edit</p>
        </div>
        <Button
          handleButton={handleCreateProgramModal}
          text="Create Program"
          type="button"
          size="l"
        />
      </div>
      <CreateProgramModal
        showCreateProgramModal={showCreateProgramModal}
        handleCreateProgramModal={handleCreateProgramModal}
      />
    </div>
  );
};

export default ProgramsNavigation;
