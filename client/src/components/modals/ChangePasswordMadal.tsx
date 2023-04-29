"use client";

import { useState } from "react";
import Input from "../global/input/Input";
import Button from "../global/button/Button";

interface Props {
  showChangePasswordModal: boolean;
  HandleShowPasswordModal: () => void;
}

const CahngePasswordModal: React.FC<Props> = (props) => {
  const { showChangePasswordModal, HandleShowPasswordModal } = props;

  const [oldPassword, setOldPassword] = useState<string>("");
  const [newPassword, setNewPassword] = useState<string>("");
  const [confirmNewPassword, setConfirmNewPassword] = useState<string>("");

  const handleOldPassword = (event: any) => {
    setOldPassword(event.target.value);
  };

  const handleNewPassword = (event: any) => {
    setNewPassword(event.target.value);
  };

  const handleConfirmPassword = (event: any) => {
    setConfirmNewPassword(event.target.value);
  };

  const handleSubmit = () => {};

  return (
    <>
      {showChangePasswordModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative h-5/6 w-4/6 my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-2 h-full border-primary rounded-[55px] shadow-lg relative flex flex-col justify-center items-center w-full bg-tertiary outline-none focus:outline-none">
                <div className="my-3">
                  <h2 className="text-primary font-semibold text-3xl ">
                    New Password
                  </h2>
                </div>
                <form
                  className="w-2/3 flex flex-col items-center"
                  onSubmit={handleSubmit}
                >
                  <Input
                    type="password"
                    height="h-12 w-full"
                    width="w-full my-3"
                    label="Old Password"
                    placeholder="8 symbls at least"
                    value={oldPassword}
                    handleChange={handleNewPassword}
                  />
                  <Input
                    type="password"
                    height="h-12 w-full"
                    width="w-full my-3"
                    label="New Password"
                    placeholder="8 symbls at least"
                    value={newPassword}
                    handleChange={handleNewPassword}
                  />
                  <Input
                    type="password"
                    height="h-12 w-full"
                    width="w-full my-3"
                    label="Confirm New Password"
                    placeholder="8 symbls at least"
                    value={confirmNewPassword}
                    handleChange={handleNewPassword}
                  />
                  <div className="my-5">
                    <Button
                      type="submit"
                      text="Update Password"
                      handleButton={HandleShowPasswordModal}
                      size="xl"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
};

export default CahngePasswordModal;
