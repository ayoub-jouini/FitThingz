"use client";

import { useState } from "react";

import Input from "../global/input/Input";
import Button from "../global/button/Button";

const SignupForm: React.FC = () => {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [gender, setGender] = useState<string>("male");
  const [dateOfBirth, setDateOfBirth] = useState<string>("");

  const handleFirstName = (event: any) => {
    setFirstName(event.target.value);
  };
  const handleLastName = (event: any) => {
    setLastName(event.target.value);
  };
  const handleEmail = (event: any) => {
    setEmail(event.target.value);
  };
  const handlePassword = (event: any) => {
    setPassword(event.target.value);
  };
  const handlePhone = (event: any) => {
    setPhone(event.target.value);
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
  };

  const handleGender = (event: any) => {
    setGender(event.target.value);
  };

  const handleDateOfBirth = (event: any) => {
    setDateOfBirth(event.target.value);
  };

  return (
    <form
      className="w-full md:w-2/3 flex flex-col items-center "
      onSubmit={handleSubmit}
    >
      <div className="w-full flex flex-col md:flex-row justify-between">
        <Input
          height="h-12"
          width="md:w-6/12 w-full md:mr-1"
          label="First Name"
          placeholder="First Name"
          value={firstName}
          handleChange={handleFirstName}
        />
        <Input
          height="h-12"
          width="md:w-6/12 w-full md:ml-1"
          label="Last Name"
          placeholder="Last Name"
          value={lastName}
          handleChange={handleLastName}
        />
      </div>
      <Input
        height="h-12"
        width="w-full"
        label="Email"
        placeholder="Email"
        value={email}
        handleChange={handleEmail}
      />
      <Input
        height="h-12"
        width="w-full"
        label="Password"
        placeholder="Password"
        value={password}
        handleChange={handlePassword}
      />
      <Input
        height="h-12"
        width="w-full"
        label="Phone Number"
        placeholder="Phone Number"
        value={phone}
        handleChange={handlePhone}
      />
      <div className="w-full flex justify-evenly  my-3 ">
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
        width="w-full "
        label="Date of Birth"
        placeholder="Date of Birth"
        value={dateOfBirth}
        handleChange={handleDateOfBirth}
      />
      <div className="my-6">
        <Button
          size="xl"
          text="Get Started"
          type="submit"
          handleButton={handleSubmit}
        />
      </div>
    </form>
  );
};

export default SignupForm;
