"use client";

import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";
import Button from "../global/button/Button";

interface Props {
  showEdit: boolean;
  showReview: boolean;
  handleShowEdit: () => void;
  handleHideEdit: () => void;
  handleShowReview: () => void;
  handleHideReview: () => void;
}

const CoachProfileNavigation: React.FC<Props> = (props) => {
  const {
    showEdit,
    showReview,
    handleShowEdit,
    handleHideEdit,
    handleShowReview,
    handleHideReview,
  } = props;

  const page = useSelectedLayoutSegment();

  return (
    <div className="flex justify-between items-center">
      <div className="w-5/12 border-2 border-grisPrimary h-14 rounded-[45px] flex my-10">
        <div
          onClick={handleHideReview}
          className={`cursor-pointer h-14 rounded-[45px] flex items-center justify-center w-1/2 ${
            !showReview && "bg-primary text-tertiary"
          }`}
        >
          Personal Informations
        </div>
        <div
          onClick={handleShowReview}
          className={`cursor-pointer h-14 rounded-[45px] flex items-center justify-center w-1/2 ${
            showReview && "bg-primary text-tertiary"
          }`}
        >
          Reviews
        </div>
      </div>
      <div
        onClick={handleShowEdit}
        className={`rounded-xl text-primary font-medium bg-tertiary border-primary border-2  cursor-pointer h-12 w-48 text-base justify-center items-center ${
          !showEdit ? "flex" : "hidden"
        }`}
      >
        <img alt="" src="/icons/editicon.svg" className="mx-2" />
        <p className="mx-2">Edit</p>
      </div>
      <div className={`${!showEdit ? "hidden" : "flex"}`}>
        <Button text="Save" type="button" handleButton={handleHideEdit} />
      </div>
    </div>
  );
};

export default CoachProfileNavigation;
