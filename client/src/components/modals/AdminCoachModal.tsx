"use client";

import { useState } from "react";
import Button from "../global/button/Button";
import ImageModal from "./ImageModal";

interface Props {
  showAdminCoachtModal: boolean;
  handleAdminCoachModal: () => void;
  name: string;
  college: string;
  cin: string;
  diploma: string;
}

const AdminCoachModal: React.FC<Props> = (props) => {
  const {
    showAdminCoachtModal,
    handleAdminCoachModal,
    name,
    college,
    cin,
    diploma,
  } = props;

  const [showCinModal, setShowCinModal] = useState<boolean>(false);
  const [showDiplomaModal, setShowDiplomaModal] = useState<boolean>(false);

  const handleShowCinModal = () => {
    setShowCinModal(!showCinModal);
  };

  const handleShowDiplomaModal = () => {
    setShowDiplomaModal(!showDiplomaModal);
  };

  return (
    <>
      {showAdminCoachtModal && (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative h-5/6 w-4/6 my-6 mx-auto max-w-xl">
              {/*content*/}
              <div className="border-2 py-5 px-20 border-primary rounded-[55px] shadow-lg relative flex flex-col justify-center items-center w-full bg-tertiary outline-none focus:outline-none">
                <div className=" grid grid-cols-5 w-full">
                  <div className="text-primary font-semibold text-3xl text-center col-start-2 col-end-5" />
                  <div
                    className="col-start-5 col-end-6 justify-self-end text-xl text-primary font-semibold cursor-pointer"
                    onClick={handleAdminCoachModal}
                  >
                    X
                  </div>
                </div>
                <div className="my-5">
                  <p className="text-lg font-semibold">{name}</p>
                </div>
                <div className="flex my-3 w-7/12">
                  <p className="">College : {college}</p>
                </div>
                <div className="flex justify-between w-7/12 my-3">
                  <p className="">CIN/ Passport : </p>
                  <Button
                    size="xs"
                    text="Open Document"
                    type="button"
                    handleButton={handleShowCinModal}
                  />
                </div>
                <div className="flex justify-between w-7/12 my-3">
                  <p className="">Diploma : </p>
                  <Button
                    size="xs"
                    text="Open Document"
                    type="button"
                    handleButton={handleShowDiplomaModal}
                  />
                </div>
              </div>
              <ImageModal
                showImageModal={showCinModal}
                handleImageModal={handleShowCinModal}
                image={cin}
              />
              <ImageModal
                showImageModal={showDiplomaModal}
                handleImageModal={handleShowDiplomaModal}
                image={diploma}
              />
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      )}
    </>
  );
};

export default AdminCoachModal;
