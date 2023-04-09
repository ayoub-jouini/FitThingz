"use client";

import { useState } from "react";
import Input from "../global/input/Input";
import Button from "../global/button/Button";
import axios from "axios";

const ForgotPasswordForm: React.FC = () => {
  const [email, setEmail] = useState<string>("");

  const handleEmail = (event: any) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    try {
      axios.post(
        `${process.env.NEXT_PUBLIC_BACK_URL}/api/auth/forgot-password`,
        {
          email,
        }
      );
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <form
      className="w-full md:w-2/3 flex flex-col items-center "
      onSubmit={handleSubmit}
    >
      <Input
        type="email"
        height="h-12 my-2"
        width="w-full"
        label="Email"
        placeholder="Email"
        value={email}
        handleChange={handleEmail}
      />
      <div className="my-6">
        <Button
          size="xl"
          text="Continue"
          type="submit"
          handleButton={handleSubmit}
        />
      </div>
    </form>
  );
};

export default ForgotPasswordForm;
