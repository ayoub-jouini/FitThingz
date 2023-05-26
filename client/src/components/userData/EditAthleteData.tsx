"use client";

import { useState } from "react";
import Input from "../global/input/Input";
import Button from "../global/button/Button";
import CahngePasswordModal from "../modals/ChangePasswordMadal";

interface Props {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  adress: string;
  showEdit: boolean;
}

const EditAthleteData: React.FC<Props> = (props) => {
  const [firstName, setFirstName] = useState<string>(props.firstName);
  const [lastName, setLastName] = useState<string>(props.lastName);
  const [email, setEmail] = useState<string>(props.email);
  const [phone, setPhone] = useState<string>(props.phone);
  const [adress, setAdress] = useState<string>(props.adress);

  const [showChangePasswordModal, setShowPasswordModel] =
    useState<boolean>(false);

  const handleChangePasswordModal = () => {
    setShowPasswordModel(!showChangePasswordModal);
  };

  const handleFirstName = (event: any) => {
    setFirstName(event.target.value);
  };
  const handleLastName = (event: any) => {
    setLastName(event.target.value);
  };
  const handleEmail = (event: any) => {
    setEmail(event.target.value);
  };
  const handlePhone = (event: any) => {
    setPhone(event.target.value);
  };

  const handleAdress = (event: any) => {
    setAdress(event.target.value);
  };

  const handleSubmit = (event: any) => {};

  return (
    <form
      className={`border-2 border-grisPrimary rounded-[45px] flex-col items-center w-full px-20 py-7 ${
        !props.showEdit ? "hidden" : "flex"
      }`}
    >
      <div className="w-2/3 flex flex-col md:flex-row justify-between my-3">
        <Input
          type="text"
          height="h-12"
          width="md:w-6/12 w-full "
          label="First Name"
          placeholder="First Name"
          value={firstName}
          handleChange={handleFirstName}
        />
        <Input
          type="text"
          height="h-12"
          width="md:w-6/12 w-full md:ml-5"
          label="Last Name"
          placeholder="Last Name"
          value={lastName}
          handleChange={handleLastName}
        />
      </div>
      <Input
        type="email"
        height="h-12"
        width="w-2/3 my-3"
        label="Email"
        placeholder="Email"
        value={email}
        handleChange={handleEmail}
      />
      <div className={` flex flex-col w-2/3 my-3`}>
        <label className="text-sm text-textPrimary font-medium mb-1">
          Password
        </label>
        <Button
          handleButton={handleChangePasswordModal}
          text="Change Password"
          type="button"
          size="s"
        />
      </div>
      <Input
        type="tel"
        height="h-12"
        width="w-2/3 my-3"
        label="Phone Number"
        placeholder="Phone Number"
        value={phone}
        handleChange={handlePhone}
      />
      <Input
        type="text"
        height="h-12"
        width="w-2/3 my-3"
        label="Adress"
        placeholder="Adress"
        value={adress}
        handleChange={handleAdress}
      />
      <CahngePasswordModal
        showChangePasswordModal={showChangePasswordModal}
        HandleShowPasswordModal={handleChangePasswordModal}
      />
    </form>
  );
};

export default EditAthleteData;
