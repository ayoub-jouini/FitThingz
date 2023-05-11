import CoachesRequestsTable from "../../../../../components/Table/usersTable/CoachesRequestsTable";
import axios from "axios";

const getData = async () => {
  const options = {
    method: "GET",
    url: `${process.env.NEXT_PUBLIC_BACK_URL}/api/coach/request`,
  };

  let response;
  try {
    response = await axios.request(options);
  } catch (error) {
    console.error(error);
  }

  return response;
};

export default async function Requests() {
  const coaches = await getData();

  return (
    <div className="mx-5">
      {coaches && <CoachesRequestsTable coaches={coaches.data.coach} />}{" "}
    </div>
  );
}
