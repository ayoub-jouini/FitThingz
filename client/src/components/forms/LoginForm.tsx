"use client";

import { useState } from "react";
import Input from "../global/input/Input";
import Button from "../global/button/Button";
import { useDispatch } from "react-redux";
import { login } from "../../store/features/auth/authThunk";

const LoginForm: React.FC = () => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleEmail = (event: any) => {
    setEmail(event.target.value);
  };
  const handlePassword = (event: any) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    dispatch<any>(login(email, password));
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
      <Input
        type="password"
        height="h-12 my-2"
        width="w-full"
        label="Password"
        placeholder="Password"
        value={password}
        handleChange={handlePassword}
      />
      <p className="w-full text-right underline underline-offset-1">
        Forget Password
      </p>
      <div className="my-6">
        <Button
          size="xl"
          text="Log In"
          type="submit"
          handleButton={handleSubmit}
        />
      </div>
    </form>
  );
};

export default LoginForm;
