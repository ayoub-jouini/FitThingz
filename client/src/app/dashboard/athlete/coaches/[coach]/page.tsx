import axios from "axios";
import AthleteCoachHeaderData from "../../../../../components/userData/AthleteCoachHeaderData";
import AthleteCoachProfileData from "../../../../../components/userData/AthleteCoachProfileData";

const getData = async (id: string) => {
  const options = {
    method: "GET",
    url: `${process.env.NEXT_PUBLIC_BACK_URL}/api/coach/id/${id}`,
  };

  let response;
  try {
    response = await axios.request(options);
  } catch (error) {
    console.error(error);
  }

  return response;
};

async function SingleCoach({ params }: { params: any }) {
  const coachData = await getData(params.coach);
  return (
    <div className="m-5">
      {coachData && (
        <>
          <AthleteCoachHeaderData coachData={coachData.data.coach} />
          <AthleteCoachProfileData coachData={coachData.data.coach} />
        </>
      )}
    </div>
  );
}

export default SingleCoach;
