"use client";

import Button from "../../global/button/Button";

interface Props {}

const HandleCreateExerciseModal: React.FC<Props> = (props) => {
  const handleCreateExercise = () => {};

  return (
    <div className="flex justify-end my-7">
      <Button
        text="Create Exercice"
        type="button"
        handleButton={handleCreateExercise}
      />
    </div>
  );
};

export default HandleCreateExerciseModal;
