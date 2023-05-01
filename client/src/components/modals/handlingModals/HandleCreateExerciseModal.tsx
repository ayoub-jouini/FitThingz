"use client";

import { useState } from "react";
import Button from "../../global/button/Button";
import CreateExerciceModal from "../../modals/CreateExerciceModal";

interface Props {}

const HandleCreateExerciseModal: React.FC<Props> = (props) => {
  const [showCreateExerciseModal, setshowCreateExerciseModal] =
    useState<boolean>(false);

  const handleCreateExerciseModal = () => {
    setshowCreateExerciseModal(!showCreateExerciseModal);
  };

  return (
    <>
      <div className="flex justify-end my-7">
        <Button
          text="Create Exercice"
          type="button"
          handleButton={handleCreateExerciseModal}
        />
      </div>
      <CreateExerciceModal
        showCreateExerciseModal={showCreateExerciseModal}
        handleCreateExerciseModal={handleCreateExerciseModal}
      />
    </>
  );
};

export default HandleCreateExerciseModal;
