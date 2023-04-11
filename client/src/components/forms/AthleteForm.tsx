"use client";

import { useState } from "react";
import Button from "../global/button/Button";
import DropDown from "../global/dropdown/DropDown";
import Input from "../global/input/Input";

const AthleteForm: React.FC = () => {
  const [height, setHeight] = useState<number>(160);
  const [weight, setWeight] = useState<number>(50);
  const [allergies, setAllergies] = useState<string>("");

  const increaseHeight = () => {
    setHeight(height + 1);
  };
  const decreaseHeight = () => {
    setHeight(height - 1);
  };
  const increaseWeight = () => {
    setWeight(weight + 1);
  };
  const decreaWeight = () => {
    setWeight(weight - 1);
  };

  const handleAllergies = (event: any) => {
    setAllergies(event.target.value);
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
  };

  return (
    <form
      className="w-full md:w-2/3 flex flex-col items-center "
      onSubmit={handleSubmit}
    >
      <div className=" flex flex-col md:flex-row justify-evenly w-full my-10">
        <div className="flex flex-col justify-center items-center md:my-0 my-3">
          <p className="font-semibold text-lg text-textPrimary">
            How tall are you?
          </p>
          <div className=" flex justify-between my-8">
            <div
              className="cursor-pointer w-10 h-9 flex justify-center items-center text-primary  rounded-full shadow shadow-slate-400 text-lg"
              onClick={decreaseHeight}
            >
              -
            </div>
            <p className="text-lg font-semibold text-textPrimary mx-6">
              {height}
            </p>
            <div
              className="cursor-pointer w-10 h-9 flex justify-center items-center text-primary  rounded-full shadow shadow-slate-400 text-lg"
              onClick={increaseHeight}
            >
              +
            </div>
          </div>
          <div className="w-20 h-5 flex justify-center items-center text-textPrimary  rounded-full shadow shadow-slate-300 text-xs">
            cm
          </div>
        </div>
        <div className="flex flex-col justify-center items-center md:my-0 my-3">
          <p className="font-semibold text-lg text-textPrimary">
            How tall are you?
          </p>
          <div className=" flex justify-between my-8">
            <div
              className="cursor-pointer w-10 h-9 flex justify-center items-center text-primary  rounded-full shadow shadow-slate-400 text-lg"
              onClick={decreaWeight}
            >
              -
            </div>
            <p className="text-lg font-semibold text-textPrimary mx-6">
              {weight}
            </p>
            <div
              className="cursor-pointer w-10 h-9 flex justify-center items-center text-primary  rounded-full shadow shadow-slate-400 text-lg"
              onClick={increaseWeight}
            >
              +
            </div>
          </div>
          <div className="w-20 h-5 flex justify-center items-center text-textPrimary  rounded-full shadow shadow-slate-300 text-xs">
            kg
          </div>
        </div>
      </div>
      <Input
        type="text"
        handleChange={handleAllergies}
        value={allergies}
        height="h-12"
        width="w-full"
        label="Allergies"
        placeholder="Allergies"
      />
      <div className="my-12">
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

export default AthleteForm;
