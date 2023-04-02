"use client";

import { useState } from "react";
import Input from "../global/input/Input";
import Button from "../global/button/Button";

const TellUsMoreForm: React.FC = () => {
  const [gender, setGender] = useState<string>("male");
  const [dateOfBirth, setDateOfBirth] = useState<string>("");

  const handleGender = (event: any) => {
    setGender(event.target.value);
  };

  const handleDateOfBirth = (event: any) => {
    setDateOfBirth(event.target.value);
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
  };

  return (
    <form
      className="w-full md:w-2/3 flex flex-col items-center "
      onSubmit={handleSubmit}
    >
      <div className="w-full flex justify-evenly  my-5 ">
        <div className="flex items-center">
          <label className="relative flex cursor-pointer items-center rounded-full p-3">
            <input
              className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-grisTertiary text-primary transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-primary checked:before:bg-primary hover:before:opacity-10"
              type="radio"
              name="gender"
              value="male"
              checked={gender === "male"}
              onChange={handleGender}
            />
            <div className="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-primary opacity-0 transition-opacity peer-checked:opacity-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-3.5 w-3.5"
                viewBox="0 0 16 16"
                fill="currentColor"
              >
                <circle data-name="ellipse" cx="8" cy="8" r="8"></circle>
              </svg>
            </div>
          </label>
          <label className="font-medium text-sm">Male</label>
        </div>
        <div className="flex items-center">
          <label className="relative flex cursor-pointer items-center rounded-full p-3">
            <input
              className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-grisTertiary text-primary transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-primary checked:before:bg-primary hover:before:opacity-10"
              type="radio"
              name="gender"
              value="female"
              checked={gender === "female"}
              onChange={handleGender}
            />
            <div className="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-primary opacity-0 transition-opacity peer-checked:opacity-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-3.5 w-3.5"
                viewBox="0 0 16 16"
                fill="currentColor"
              >
                <circle data-name="ellipse" cx="8" cy="8" r="8"></circle>
              </svg>
            </div>
          </label>
          <label className="font-medium text-sm">Female</label>
        </div>
      </div>
      <Input
        height="h-12"
        width="w-full my-5"
        label="Date of Birth"
        placeholder="Date of Birth"
        value={dateOfBirth}
        handleChange={handleDateOfBirth}
      />
      <div className="my-6 w-full hidden md:flex justify-evenly">
        <Button
          size="l"
          style="outlined"
          text="Previous"
          type="button"
          handleButton={handleSubmit}
        />
        <Button
          size="l"
          text="Next"
          type="submit"
          handleButton={handleSubmit}
        />
      </div>
      <div className="my-6 w-full md:hidden flex justify-evenly">
        <Button
          size="s"
          style="outlined"
          text="Previous"
          type="button"
          handleButton={handleSubmit}
        />
        <Button
          size="s"
          text="Next"
          type="submit"
          handleButton={handleSubmit}
        />
      </div>
    </form>
  );
};

export default TellUsMoreForm;
