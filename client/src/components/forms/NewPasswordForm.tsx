"use client";

import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

import Input from "../global/input/Input";
import Button from "../global/button/Button";

interface Props {
  token: string;
}

const NewPasswordForm: React.FC<Props> = ({ token }) => {
  const router = useRouter();
  const [password, setPassword] = useState<string>("");

  const handlePassword = (event: any) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    try {
      axios.post(
        `${process.env.NEXT_PUBLIC_BACK_URL}/api/auth/reset-password/${token}`,
        {
          password,
        }
      );
    } catch (err) {
      console.log(err);
    }
    router.push("/login");
  };

  return (
    <form
      className="w-full md:w-2/3 flex flex-col items-center "
      onSubmit={handleSubmit}
    >
      <Input
        type="password"
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

export default NewPasswordForm;
