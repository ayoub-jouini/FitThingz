"use client";

import CoachProfileData from "../../../../components/userData/CoachProfileData";
import { useState } from "react";
import CoachProfileNavigation from "../../../../components/navigation/CoachProfileNavigation";
import CoachProfileHeader from "../../../../components/userData/CoachProfileHeader";
import ReviewTable from "../../../../components/review/ReviewGrid";

function Profile() {
  const [showEdit, setShowEdit] = useState<boolean>(true);

  const [showReview, setShowReviews] = useState<boolean>(false);

  const handleShowReview = () => {
    setShowReviews(true);
  };

  const handleHideReview = () => {
    setShowReviews(false);
  };

  const handleShowEdit = () => {
    setShowEdit(true);
  };

  const handleHideEdit = () => {
    setShowEdit(false);
  };

  return (
    <div className="m-5">
      <CoachProfileHeader />
      <CoachProfileNavigation
        showEdit={showEdit}
        showReview={showReview}
        handleShowEdit={handleShowEdit}
        handleHideEdit={handleHideEdit}
        handleShowReview={handleShowReview}
        handleHideReview={handleHideReview}
      />
      <CoachProfileData showEdit={showEdit} showReview={showReview} />
      <ReviewTable showReview={showReview} />
    </div>
  );
}

export default Profile;
