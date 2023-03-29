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

  return (
    <form className="w-2/3 flex flex-col items-center" onSubmit={handleSubmit}>
      <div className="w-full flex justify-between">
        <Input
          height="h-12"
          width="w-60"
          label="First Name"
          placeholder="First Name"
          value={firstName}
          handleChange={handleFirstName}
        />
        <Input
          height="h-12"
          width="w-60"
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
