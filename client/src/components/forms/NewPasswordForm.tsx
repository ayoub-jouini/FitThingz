"use client";

import { useState } from "react";
import Input from "../global/input/Input";
import Button from "../global/button/Button";

const ForgotPasswordForm: React.FC = () => {
  const [password, setPassword] = useState<string>("");

  const handlePassword = (event: any) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
  };

  return (
    <form
      className="w-full md:w-2/3 flex flex-col items-center "
      onSubmit={handleSubmit}
    >
      <Input
        height="h-12 my-2"
        width="w-full"
        label="Password"
        placeholder="Password"
        value={password}
        handleChange={handlePassword}
      />
      <div className="my-6">
        <Button
          size="xl"
          text="Update Password"
          type="submit"
          handleButton={handleSubmit}
        />
      </div>
    </form>
  );
};

export default ForgotPasswordForm;
