"use client";

import { useState } from "react";
import Button from "../global/button/Button";
import DropDown from "../global/dropdown/DropDown";

const CoachForm: React.FC = () => {
  const [gender, setGender] = useState<string>("male");

  const handleGender = (event: any) => {
    setGender(event.target.value);
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
  };

  return (
    <form
      className="w-full md:w-2/3 flex flex-col items-center "
      onSubmit={handleSubmit}
    >
      <DropDown
        handleChange={handleGender}
        value={gender}
        placeholder="gender"
        label="gender"
        height="h-12"
        width="w-full"
      >
        <option value="caoch">coach</option>
      </DropDown>

      <div className=" flex justify-evenly w-full my-10">
        <div className="border-2 border-primary rounded-3xl w-32 h-32 md:w-44 md:h-44 p-5">
          <img alt="" src="/icons/Document.svg" className="" />
          <p className=" text-xs my-3">Copie CIN /passport</p>
        </div>
        <div className="border-2 border-primary rounded-3xl w-32 h-32 md:w-44 md:h-44 p-5">
          <img alt="" src="/icons/Document.svg" className="" />
          <p className=" text-xs my-3">Copie CIN /passport</p>
        </div>
      </div>
      <div className="">
        <Button
          size="xl"
          text="Submit"
          type="submit"
          handleButton={handleSubmit}
        />
      </div>
    </form>
  );
};

export default CoachForm;
