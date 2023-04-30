"use client";

import { useRef, useState } from "react";
import Input from "../global/input/Input";
import TextArea from "../global/textArea/TextArea";
import Button from "../global/button/Button";

interface Props {}

const EditTarificationModal: React.FC<Props> = (props) => {
  const [name, setName] = useState<string>("");
  const [bodyPart, setBodyPart] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [tags, setTags] = useState<string>("");
  const [video, setVideo] = useState<any>();

  const changeName = (event: any) => {
    setName(event.target.value);
  };
  const changeBodyPart = (event: any) => {
    setBodyPart(event.target.value);
  };
  const changeDescription = (event: any) => {
    setDescription(event.target.value);
  };
  const changeTags = (event: any) => {
    setTags(event.target.value);
  };
  const handleVideo = (event: any) => {
    setVideo(event.target.value);
  };

  const uploadVideo = useRef<HTMLInputElement>(null);

  const handleUploadButtonClick = () => {
    if (uploadVideo.current) uploadVideo.current.click();
  };

  const handleSubmit = () => {};
  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative h-5/6 w-4/6 my-6 mx-auto max-w-3xl">
          {/*content*/}
          <div className="border-2 py-5 px-20 border-primary rounded-[55px] shadow-lg relative flex flex-col justify-center items-center w-full bg-tertiary outline-none focus:outline-none">
            <div className="my-3">
              <h2 className="text-primary font-semibold text-3xl ">
                Create Exercise
              </h2>
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
                    placeholder="Bodypart"
                    value={name}
                    handleChange={changeName}
                  />
                  <TextArea
                    height=" w-full"
                    width="w-full my-3"
                    label="Description"
                    placeholder="Description"
                    value={description}
                    handleChange={changeDescription}
                  />
                  <Input
                    type="text"
                    height="h-12 w-full"
                    width="w-full my-3"
                    label="Tags"
                    placeholder="Tags"
                    value={name}
                    handleChange={changeName}
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
                    <p className={`text-sm mt-3 ${video && "text-tertiary"}`}>
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
                />
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
};

export default EditTarificationModal;
