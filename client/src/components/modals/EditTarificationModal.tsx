"use client";

import { useState } from "react";
import Input from "../global/input/Input";
import Button from "../global/button/Button";
import TextArea from "../global/textArea/TextArea";

interface Props {
  EditTarificationModal: boolean;
  ShowEditTrificationModal: () => void;
  id: number;
  title: string;
  description: string;
  promo: string;
  duration: number;
  price: number;
  tarification: number;
}

const EditTarificationModal: React.FC<Props> = (props) => {
  const { ShowEditTrificationModal, EditTarificationModal, tarification, id } =
    props;

  const [title, setTitle] = useState<string>(props.title);
  const [description, setDescription] = useState<string>(props.description);
  const [promo, setPromo] = useState<string>(props.promo);
  const [duration, setDuration] = useState<number>(props.duration);
  const [price, setPrice] = useState<number>(props.price);

  const handleChangeTitle = (event: any) => {
    setTitle(event.target.value);
  };
  const handleChangeDescription = (event: any) => {
    setDescription(event.target.value);
  };
  const handleChangePromo = (event: any) => {
    setPromo(event.target.value);
  };

  const increaseDuration = (event: any) => {
    setDuration(duration + 1);
  };

  const decreaseDuration = (event: any) => {
    setDuration(duration - 1);
  };

  const handleChangeDuration = (event: any) => {
    setDuration(event.target.value);
  };

  const increasePrice = (event: any) => {
    setPrice(price + 1);
  };

  const decreasePrice = (event: any) => {
    setPrice(price - 1);
  };

  const handleChangePrice = (event: any) => {
    setPrice(event.target.value);
  };

  const handleSubmit = () => {};

  return (
    <>
      {EditTarificationModal && tarification === id ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative h-5/6 w-4/6 my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-2 py-10 border-primary rounded-[55px] shadow-lg relative flex flex-col justify-center items-center w-full bg-tertiary outline-none focus:outline-none">
                <div className="my-3 grid grid-cols-12 w-2/3">
                  <h2 className="text-primary font-semibold text-3xl text-center col-start-2 col-end-12">
                    {title}
                  </h2>
                  <div
                    className="col-start-12 col-end-13 justify-self-end text-xl text-primary font-semibold cursor-pointer"
                    onClick={ShowEditTrificationModal}
                  >
                    X
                  </div>
                </div>
                <form
                  className="w-2/3 flex flex-col items-center"
                  onSubmit={handleSubmit}
                >
                  <Input
                    type="text"
                    height="h-12 w-full"
                    width="w-full my-3"
                    label="Title"
                    placeholder="Title"
                    value={title}
                    handleChange={handleChangeTitle}
                  />
                  <TextArea
                    height="w-full"
                    width="w-full my-3"
                    label="Promo"
                    placeholder="Promo"
                    value={description}
                    handleChange={handleChangeDescription}
                  />
                  <Input
                    type="text"
                    height="h-12 w-full"
                    width="w-full my-3"
                    label="Promo"
                    placeholder="Promo"
                    value={promo}
                    handleChange={handleChangePromo}
                  />
                  <div className=" flex flex-col md:flex-row justify-evenly w-full my-10">
                    <div className="flex flex-col justify-center items-center md:my-0 my-3">
                      <p className="text-sm text-textPrimary">Duration</p>
                      <div className=" flex justify-between my-8">
                        <div
                          className="cursor-pointer w-10 h-9 flex justify-center items-center text-primary  rounded-full shadow shadow-slate-400 text-lg"
                          onClick={decreaseDuration}
                        >
                          -
                        </div>
                        <p className="text-lg font-semibold text-textPrimary mx-6">
                          {duration}
                        </p>
                        <div
                          className="cursor-pointer w-10 h-9 flex justify-center items-center text-primary  rounded-full shadow shadow-slate-400 text-lg"
                          onClick={increaseDuration}
                        >
                          +
                        </div>
                      </div>
                      <div className="w-20 h-5 flex justify-center items-center text-textPrimary  rounded-full shadow shadow-slate-300 text-xs">
                        week
                      </div>
                    </div>
                    <div className="flex flex-col justify-center items-center md:my-0 my-3">
                      <p className="text-sm text-textPrimary">Price</p>
                      <div className=" flex justify-between my-8">
                        <div
                          className="cursor-pointer w-10 h-9 flex justify-center items-center text-primary  rounded-full shadow shadow-slate-400 text-lg"
                          onClick={decreasePrice}
                        >
                          -
                        </div>
                        <p className="text-lg font-semibold text-textPrimary mx-6">
                          {price}
                        </p>
                        <div
                          className="cursor-pointer w-10 h-9 flex justify-center items-center text-primary  rounded-full shadow shadow-slate-400 text-lg"
                          onClick={increasePrice}
                        >
                          +
                        </div>
                      </div>
                      <div className="w-20 h-5 flex justify-center items-center text-textPrimary  rounded-full shadow shadow-slate-300 text-xs">
                        DT
                      </div>
                    </div>
                  </div>
                  <div className="my-5 flex ">
                    <div className="mx-3">
                      <Button
                        type="submit"
                        text="Save"
                        handleButton={ShowEditTrificationModal}
                        size="s"
                      />
                    </div>
                    <div className="mx-2">
                      <Button
                        type="submit"
                        style="outlined"
                        text="Delete"
                        handleButton={ShowEditTrificationModal}
                        size="s"
                      />
                    </div>
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

export default EditTarificationModal;
