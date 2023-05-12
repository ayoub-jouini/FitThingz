"use client";

import { useSelectedLayoutSegment } from "next/navigation";

interface Props {
  showReview: boolean;
  handleShowReview: () => void;
  handleHideReview: () => void;
}

const AthleteCoachNavigation: React.FC<Props> = (props) => {
  const { showReview, handleShowReview, handleHideReview } = props;

  return (
    <div className="flex justify-between items-center">
      <div className="w-5/12 border-2 border-grisPrimary h-14 rounded-[45px] flex my-10">
        <div
          onClick={handleHideReview}
          className={`cursor-pointer h-14 rounded-[45px] flex items-center justify-center w-1/2 ${
            !showReview && "bg-primary text-tertiary"
          }`}
        >
          Pricing
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
    </div>
  );
};

export default AthleteCoachNavigation;
