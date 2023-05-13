"use client";

import { useState } from "react";
import Button from "../global/button/Button";
import TextArea from "../global/textArea/TextArea";

interface Props {
  showRateModal: boolean;
  handleRateModal: () => void;
  id: string;
}

const RateAndReview: React.FC<Props> = (props) => {
  const { showRateModal, handleRateModal, id } = props;

  const [review, setReview] = useState<string>("");

  const handleReview = (event: any) => {
    setReview(event.target.value);
  };

  const handleSubmit = () => {};

  return (
    <>
      {showRateModal && (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative h-5/6 w-4/6 my-6 mx-auto max-w-xl">
              {/*content*/}
              <div className="border-2 py-5 px-20 border-primary rounded-[55px] shadow-lg relative flex flex-col justify-center items-center w-full bg-tertiary outline-none focus:outline-none">
                <div className=" grid grid-cols-5 w-full">
                  <div className="text-primary font-semibold text-3xl text-center col-start-2 col-end-5" />
                  <div
                    className="col-start-5 col-end-6 justify-self-end text-xl text-primary font-semibold cursor-pointer"
                    onClick={handleRateModal}
                  >
                    X
                  </div>
                </div>
                <p className="text-3xl text-primary font-semibold">Rate</p>
                <div className="flex my-5">
                  <img
                    className="mx-1 w-11"
                    alt=""
                    src="/icons/containedstar.svg"
                  />
                  <img
                    className="mx-1 w-11"
                    alt=""
                    src="/icons/containedstar.svg"
                  />
                  <img
                    className="mx-1 w-11"
                    alt=""
                    src="/icons/containedstar.svg"
                  />
                  <img
                    className="mx-1 w-11"
                    alt=""
                    src="/icons/containedstar.svg"
                  />
                  <img
                    className="mx-1 w-11"
                    alt=""
                    src="/icons/outlinedstar.svg"
                  />
                </div>
                <TextArea
                  placeholder="Write here"
                  value={review}
                  handleChange={handleReview}
                  label="Write a Review here!"
                  height="h-36"
                  width="w-full my-5"
                />
                <div className="my-5 flex">
                  <div className="mx-2">
                    <Button
                      handleButton={handleSubmit}
                      text="Submit"
                      type="button"
                    />
                  </div>
                  <div className="mx-2">
                    <Button
                      handleButton={handleRateModal}
                      text="Submit"
                      type="button"
                      style="outlined"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      )}
    </>
  );
};

export default RateAndReview;
