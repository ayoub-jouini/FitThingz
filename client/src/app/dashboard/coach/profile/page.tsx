"use client";

import { useEffect, useState } from "react";

import CoachProfileData from "../../../../components/userData/CoachProfileData";
import CoachProfileNavigation from "../../../../components/navigation/CoachProfileNavigation";
import CoachProfileHeader from "../../../../components/userData/CoachProfileHeader";
import ReviewTable from "../../../../components/review/ReviewGrid";
import { useSelector } from "react-redux";
import axios from "axios";

function Profile() {
  const auth: any = useSelector((state: any) => state.auth);

  const [coachData, setCoachData] = useState<any>();

  useEffect(() => {
    const getData = async () => {
      const options = {
        method: "GET",
        url: `${process.env.NEXT_PUBLIC_BACK_URL}/api/coach/user/${auth.id}`,
      };

      let response;

      try {
        response = await axios.request(options);
        setCoachData(response.data.coach);
      } catch (error) {
        console.error(error);
      }
    };
    getData();
  }, []);

  const [showEdit, setShowEdit] = useState<boolean>(false);

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
      {coachData && (
        <>
          <CoachProfileHeader coachData={coachData.user} />
          <CoachProfileNavigation
            showEdit={showEdit}
            showReview={showReview}
            handleShowEdit={handleShowEdit}
            handleHideEdit={handleHideEdit}
            handleShowReview={handleShowReview}
            handleHideReview={handleHideReview}
          />
          <CoachProfileData
            showEdit={showEdit}
            showReview={showReview}
            coachData={coachData.user}
          />
          <ReviewTable
            reviewData={coachData.commentaire}
            showReview={showReview}
          />
        </>
      )}
    </div>
  );
}

export default Profile;
