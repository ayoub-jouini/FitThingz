"use client";

import { useState } from "react";
import Input from "../global/input/Input";
import Button from "../global/button/Button";
import axios from "axios";
import { useSelector } from "react-redux";
import TextArea from "../global/textArea/TextArea";
import { useRouter } from "next/navigation";

interface Props {
  showCreateProgramModal: boolean;
  handleCreateProgramModal: () => void;
}

const CreateProgramModal: React.FC<Props> = (props) => {
  const { showCreateProgramModal, handleCreateProgramModal } = props;

  const auth: any = useSelector((state: any) => state.auth);

  const router = useRouter();

  const [name, setName] = useState<string>("");
  const [type, setType] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [tags, setTags] = useState<string>("");
  const [duration, setDuration] = useState<number>(1);

  const changeName = (event: any) => {
    setName(event.target.value);
  };
  const changeType = (event: any) => {
    setType(event.target.value);
  };
  const changeDescription = (event: any) => {
    setDescription(event.target.value);
  };
  const changeTags = (event: any) => {
    setTags(event.target.value);
  };
  const changeDuration = (event: any) => {
    setDuration(event.target.value);
  };

  const increaseDuration = () => {
    setDuration(duration + 1);
  };

  const decreaseDuration = () => {
    setDuration(duration - 1);
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BACK_URL}/api/programme/`,
        {
          nom: name,
          type,
          description,
          tags,
          duree: duration,
        },
        {
          headers: {
            authorization: "Bearer " + auth.accessToken,
          },
        }
      );
      handleCreateProgramModal();
      router.push(
        `/dashboard/coach/programs/${response.data.id}/editexercises/`
      );
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      {showCreateProgramModal && (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative h-5/6 w-4/6 my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-2 py-5 px-20 border-primary rounded-[55px] shadow-lg relative flex flex-col justify-center items-center w-full bg-tertiary outline-none focus:outline-none">
                <div className="my-3 grid grid-cols-5 w-full">
                  <h2 className="text-primary font-semibold text-3xl text-center col-start-2 col-end-5">
                    Create Program
                  </h2>
                  <div
                    className="col-start-5 col-end-6 justify-self-end text-xl text-primary font-semibold cursor-pointer"
                    onClick={handleCreateProgramModal}
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
                        label="Type"
                        placeholder="Type"
                        value={type}
                        handleChange={changeType}
                      />
                      <TextArea
                        height="w-full"
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
                        value={tags}
                        handleChange={changeTags}
                      />
                    </div>
                    <div className="flex flex-col justify-center items-center md:my-0 my-3">
                      <p className="text-sm text-textPrimary">Duration</p>
                      <div className=" flex justify-between my-8">
                        <div
                          className="cursor-pointer w-10 h-9 flex justify-center items-center text-primary  rounded-full shadow shadow-slate-400 text-lg"
                          onClick={decreaseDuration}
                        >
                          -
                        </div>
                        <input
                          type="text"
                          className="text-lg font-semibold text-textPrimary mx-6 bg-tertiary w-10 text-center"
                          value={duration}
                          onChange={changeDuration}
                        />
                        <div
                          className="cursor-pointer w-10 h-9 flex justify-center items-center text-primary  rounded-full shadow shadow-slate-400 text-lg"
                          onClick={increaseDuration}
                        >
                          +
                        </div>
                      </div>
                      <div className="w-20 h-5 flex justify-center items-center text-textPrimary  rounded-full shadow shadow-slate-300 text-xs">
                        Day
                      </div>
                    </div>
                  </div>
                  <div className="my-5 ">
                    <Button
                      type="submit"
                      text="Start"
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

export default CreateProgramModal;
