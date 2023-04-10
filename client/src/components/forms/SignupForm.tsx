"use client";

import { useEffect, useState } from "react";

import Input from "../global/input/Input";
import Button from "../global/button/Button";

import { useDispatch } from "react-redux";
import { registre } from "../../store/features/auth/authThunk";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";

const SignupForm: React.FC = () => {
  let auth: any = useSelector((state: any) => state.auth);

  const dispatch = useDispatch();

  const router = useRouter();
  useEffect(() => {
    if (auth.type === "coach") {
      router.push("/signup/coach");
    } else if (auth.type === "sportif") {
      router.push("/signup/athlete");
    }
  }, [auth]);

  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [gender, setGender] = useState<string>("male");
  const [dateOfBirth, setDateOfBirth] = useState<string>("");
  const [adress, setAdress] = useState<string>("");
  const [type, setType] = useState<string>("");

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
  const handleGender = (event: any) => {
    setGender(event.target.value);
  };

  const handleDateOfBirth = (event: any) => {
    setDateOfBirth(event.target.value);
  };
  const handleAdress = (event: any) => {
    setAdress(event.target.value);
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    dispatch<any>(
      registre({
        firstName,
        lastName,
        email,
        password,
        gender,
        adress,
        dateOfBirth,
        phone,
        type,
      })
    );
  };

  return (
    <form
      className="w-full md:w-2/3 flex flex-col items-center "
      onSubmit={handleSubmit}
    >
      <div className="w-full flex flex-col md:flex-row justify-between">
        <Input
          type="text"
          height="h-12"
          width="md:w-6/12 w-full md:mr-1"
          label="First Name"
          placeholder="First Name"
          value={firstName}
          handleChange={handleFirstName}
        />
        <Input
          type="text"
          height="h-12"
          width="md:w-6/12 w-full md:ml-1"
          label="Last Name"
          placeholder="Last Name"
          value={lastName}
          handleChange={handleLastName}
        />
      </div>
      <Input
        type="email"
        height="h-12"
        width="w-full"
        label="Email"
        placeholder="Email"
        value={email}
        handleChange={handleEmail}
      />
      <Input
        type="password"
        height="h-12"
        width="w-full"
        label="Password"
        placeholder="Password"
        value={password}
        handleChange={handlePassword}
      />
      <Input
        type="tel"
        height="h-12"
        width="w-full"
        label="Phone Number"
        placeholder="Phone Number"
        value={phone}
        handleChange={handlePhone}
      />
      <div className="w-full my-1">
        <label className="text-sm text-textPrimary font-medium mb-1 text-left">
          Gender :
        </label>
        <div className="w-full flex justify-evenly  my-3 ">
          <div className="flex items-center">
            <label className="relative flex cursor-pointer items-center rounded-full p-3">
              <input
                className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-grisTertiary text-primary transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-primary checked:before:bg-primary hover:before:opacity-10"
                type="radio"
                name="gender"
                value="m"
                checked={gender === "m"}
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
                value="f"
                checked={gender === "f"}
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
      </div>
      <Input
        type="date"
        height="h-12"
        width="w-full "
        label="Date of Birth"
        placeholder="Date of Birth"
        value={dateOfBirth}
        handleChange={handleDateOfBirth}
      />
      <Input
        type="text"
        height="h-12"
        width="w-full "
        label="Adress"
        placeholder="Adress"
        value={adress}
        handleChange={handleAdress}
      />
      <div className="w-full my-1">
        <label className="text-sm text-textPrimary font-medium mb-1">
          I am ...
        </label>
        <div className="flex justify-between w-full my-2">
          <div
            onClick={() => setType("coach")}
            style={
              type === "coach"
                ? { borderColor: "#A4022D" }
                : { borderColor: "#BAB9B9" }
            }
            className={`cursor-pointer border-2 bg-tertiary rounded-3xl w-1/2 mr-2 h-32 flex flex-col justify-center items-center`}
          >
            <img alt="" src="/icons/coach.svg" className="h-16" />
            <p className="font-semibold text-textPrimary">A Coach</p>
          </div>
          <div
            onClick={() => setType("sportif")}
            style={
              type === "sportif"
                ? { borderColor: "#A4022D" }
                : { borderColor: "#BAB9B9" }
            }
            className={`cursor-pointer border-2 bg-tertiary rounded-3xl w-1/2 ml-2 h-32 flex flex-col justify-center items-center`}
          >
            <img alt="" src="/icons/Sportif.svg" className="h-16" />
            <p className="font-semibold text-textPrimary">An Athlete</p>
          </div>
        </div>
      </div>
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
