import axios from "axios";
import CoachesGrid from "../../../../components/Table/coachesGrid/CoachesGrid";

const getData = async () => {
  const options = {
    method: "GET",
    url: `${process.env.NEXT_PUBLIC_BACK_URL}/api/coach/`,
  };

  let response;
  try {
    response = await axios.request(options);
  } catch (error) {
    console.error(error);
  }

  return response;
};

export default async function Coaches() {
  const coaches = await getData();
  return (
    <div className="mx-5">
      {coaches && <CoachesGrid coaches={coaches.data.coach} />}{" "}
    </div>
  );
}
