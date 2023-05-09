"use client";

import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";
import Button from "../global/button/Button";
import { useState } from "react";
import CreateDietModal from "../modals/CreateDietModal";
import CreateFoodModal from "../modals/CreateFoodModal";

interface Props {}

const NutritionNavigation: React.FC<Props> = () => {
  const [showCreateDietModal, setshowCreateDietModal] =
    useState<boolean>(false);

  const [showCreateFoodModal, setshowCreateFoodModal] =
    useState<boolean>(false);

  const handleCreateDietModal = () => {
    setshowCreateDietModal(!showCreateDietModal);
  };

  const handleCreateFoodModal = () => {
    setshowCreateFoodModal(!showCreateFoodModal);
  };

  const page = useSelectedLayoutSegment();

  return (
    <>
      {(!page || page === "food") && (
        <div className="flex justify-between items-center">
          <div className="w-5/12 border-2 border-grisPrimary h-14 rounded-[45px] flex my-10">
            <Link
              href={`/dashboard/coach/nutrition/`}
              className={`h-14 rounded-[45px] flex items-center justify-center w-1/2 ${
                !page && "bg-primary text-tertiary"
              }`}
            >
              Diet
            </Link>
            <Link
              href={`/dashboard/coach/nutrition/food`}
              className={`h-14 rounded-[45px] flex items-center justify-center w-1/2 ${
                page === "food" && "bg-primary text-tertiary"
              }`}
            >
              Food
            </Link>
          </div>
          <div className="flex ">
            {/* <div className="mx-3 rounded-xl text-primary font-medium bg-tertiary border-primary border-2  cursor-pointer h-12 w-48 text-base flex justify-center items-center">
              <img alt="" src="/icons/filtericon.svg" className="mx-2" />
              <p className="mx-2">Filter</p>
            </div> */}
            <div className="mx-3">
              <Button
                text="Create Food"
                type="button"
                handleButton={handleCreateFoodModal}
                size="l"
                style="outlined"
              />
            </div>
            <Button
              text="Create Diet"
              type="button"
              handleButton={handleCreateDietModal}
              size="l"
            />
          </div>
          <CreateDietModal
            showCreateDietModal={showCreateDietModal}
            handleCreateDietModal={handleCreateDietModal}
          />
          <CreateFoodModal
            handleCreateProgramModal={handleCreateFoodModal}
            showCreateProgramModal={showCreateFoodModal}
          />
        </div>
      )}
    </>
  );
};

export default NutritionNavigation;
