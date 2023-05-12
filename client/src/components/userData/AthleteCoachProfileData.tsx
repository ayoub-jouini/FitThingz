"use client";

import { useState } from "react";
import AthleteCoachNavigation from "../navigation/AthleteCoachNavigation";
import ReviewTable from "../review/ReviewGrid";
import AtheleteCoachPricing from "./AthleteCoachPricing";

interface Props {
  coachData: any;
}

const AthleteCoachProfileData: React.FC<Props> = (props) => {
  const { coachData } = props;
  const [showReview, setShowReview] = useState<boolean>(false);

  const handleShowReview = () => {
    setShowReview(true);
  };

  const handleHideReview = () => {
    setShowReview(false);
  };
  return (
    <>
      <AthleteCoachNavigation
        showReview={showReview}
        handleHideReview={handleHideReview}
        handleShowReview={handleShowReview}
      />
      <ReviewTable showReview={showReview} />
      {showReview &&
        coachData.tarification.map((tariffication: any, key: any) => (
          <AtheleteCoachPricing
            title={tariffication.titre}
            duration={tariffication.duree}
            price={tariffication.prix}
            promo={tariffication.promo}
            description={tariffication.description}
          />
        ))}
    </>
  );
};

export default AthleteCoachProfileData;
