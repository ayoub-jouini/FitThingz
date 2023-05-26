"use client";

import { useRef, useState } from "react";
import Input from "../global/input/Input";
import Button from "../global/button/Button";
import axios from "axios";
import { useSelector } from "react-redux";

interface Props {
  showCreateExerciseModal: boolean;
  handleCreateExerciseModal: () => void;
}

const CreateExerciseModal: React.FC<Props> = (props) => {
  const { showCreateExerciseModal, handleCreateExerciseModal } = props;

  const auth: any = useSelector((state: any) => state.auth);

  const [name, setName] = useState<string>("");
  const [bodyPart, setBodyPart] = useState<string>("");
  const [target, setTarget] = useState<string>("");
  const [equipment, setEquipment] = useState<string>("");
  const [video, setVideo] = useState<any>();

  const changeName = (event: any) => {
    setName(event.target.value);
  };
  const changeBodyPart = (event: any) => {
    setBodyPart(event.target.value);
  };
  const changeTarget = (event: any) => {
    setTarget(event.target.value);
  };
  const changeEquipment = (event: any) => {
    setEquipment(event.target.value);
  };
  const handleVideo = (event: any) => {
    setVideo(event.target.value);
  };

  const uploadVideo = useRef<HTMLInputElement>(null);

  const handleUploadButtonClick = () => {
    if (uploadVideo.current) uploadVideo.current.click();
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("bodyPart", bodyPart);
    formData.append("target", target);
    formData.append("equipment", equipment);
    formData.append("video", video);
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BACK_URL}/api/exercice/`,
        formData,
        {
          headers: {
            authorization: "Bearer " + auth.accessToken,
          },
        }
      );
    } catch (err) {
      console.log(formData);
    }
    handleCreateExerciseModal();
  };
  return (
    <>
      {showCreateExerciseModal && (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative h-5/6 w-4/6 my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-2 py-5 px-20 border-primary rounded-[55px] shadow-lg relative flex flex-col justify-center items-center w-full bg-tertiary outline-none focus:outline-none">
                <div className="my-3 grid grid-cols-5 w-full">
                  <h2 className="text-primary font-semibold text-3xl text-center col-start-2 col-end-5">
                    Create Exercise
                  </h2>
                  <div
                    className="col-start-5 col-end-6 justify-self-end text-xl text-primary font-semibold cursor-pointer"
                    onClick={handleCreateExerciseModal}
                  >
                    X
                  </div>
                </div>
                <form
                  onSubmit={handleSubmit}
                  className="w-full flex flex-col items-center"
                >
                  <div className="grid grid-cols-3 gap-10 w-full items-center">
                    <div className="col-span-2">
                      <Input
                        type="text"
                        height="h-12 w-full"
                        width="w-full my-3"
                        label="Name"
                        placeholder="Name"
                        value={name}
                        handleChange={changeName}
                      />
                      <Input
                        type="text"
                        height="h-12 w-full"
                        width="w-full my-3"
                        label="BodyPart"
                        placeholder="BodyPart"
                        value={bodyPart}
                        handleChange={changeBodyPart}
                      />
                      <Input
                        type="text"
                        height="h-12 w-full"
                        width="w-full my-3"
                        label="Target"
                        placeholder="Target"
                        value={target}
                        handleChange={changeTarget}
                      />
                      <Input
                        type="text"
                        height="h-12 w-full"
                        width="w-full my-3"
                        label="Equipment"
                        placeholder="Equipment"
                        value={equipment}
                        handleChange={changeEquipment}
                      />
                    </div>
                    <div className="col-span-1">
                      <div
                        className={`border-2 cursor-pointer border-primary rounded-3xl w-32 h-32 md:w-44 md:h-44 p-5 ${
                          video && "bg-primary"
                        }`}
                        onClick={handleUploadButtonClick}
                      >
                        {video ? (
                          <img
                            alt=""
                            src="/icons/uploadvideoiconwhite.svg"
                            className=""
                          />
                        ) : (
                          <img
                            alt=""
                            src="/icons/uploadvideoicon.svg"
                            className=""
                          />
                        )}
                        <p
                          className={`text-sm mt-3 ${video && "text-tertiary"}`}
                        >
                          Add Video or Gif
                        </p>
                        <p className={`text-2xs ${video && "text-tertiary"}`}>
                          Transform Your Training with video{" "}
                        </p>
                      </div>
                      <input
                        type="file"
                        className="hidden"
                        ref={uploadVideo}
                        onChange={handleVideo}
                      />
                    </div>
                  </div>
                  <div className="my-5 ">
                    <Button
                      type="submit"
                      text="Create"
                      handleButton={handleSubmit}
                      size="xl"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      )}
    </>
  );
};

export default CreateExerciseModal;
